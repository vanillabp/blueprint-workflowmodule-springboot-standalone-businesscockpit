![VanillaBP](readme/vanillabp-headline.png)

# Blueprint "Standalone leveraging Business Cockpit"

## How to store data entered into user task forms?

When involving business people into a workflow leveraging user tasks,
particular attributes of data entered by users (as part of fulfilling a
user task) will affect the flow of the process. In this demo an
attribute `risk is acceptable` is entered as part of the user task
`AssessRisk`. As you can see in the [BPMN](./readme/loan-approval-process.png)
it affects the flow of the process.

In VanillaBP based business processing applications, an aggregate is
used as the single source of truth of data needed to run a workflow.
Therefore, it makes sense to store the form data of user tasks in
the aggregate as well.
However, there are two scenarios in which this is problematic:

1. In the Business Cockpit, users can reopen user tasks that have already
   been completed. The use case for this feature is to see what data
   was entered on completing the task. In this situation, the form is shown read-only.
2. A process model might have multiple flows in parallel accessing
   attributes entered in a user task which are currently active.
   If a user task allows to save data without completing the form
   (for later continuation) and this data is stored in the aggregate's
   attributes then unconfirmed data is available to other flows
   and may affect their behavior.

To solve these problems, form data is *NOT* stored in the aggregate
until the user task is completed.

Advantages of this approach:

1. **Separation of concerns**: The aggregate represents the overall state
   of the workflow, while individual user task data is handled separately.
2. **Intermediate saves**: Saving form data does not change the
   aggregate. It is also save to store unvalidated user input, e.g.
   in situations where validation can only succeed when completing the
   user task.
3. **Data consistency**: The aggregate remains clean and is updated only with
   finalized decisions and data once a task is completed.
4. **Auditability**: Keeping task data in separate entities allows tracking
   changes, timestamps, and user inputs before continuing to process
   the workflow.

## How it works

1. In the aggregate, a map storing all user tasks is introduced:

   ```java
   private Map<String, Task> tasks;
   ```

   Its keys are the user task ids and the value class `Task` is used to store
   data specific to tasks.

2. The class `Task` stores meta-data common to all user tasks and needed
   for auditability.

   ```java
   @Entity
   public class Task {
       @Id
       private String taskId;

       @Column(name = "COMPLETED_AT")
       private OffsetDateTime completedAt;
       ...
   }
   ```
3. Additionally, the class `Task` stores form data in the attribute `data`.

   ```java
    public interface TaskData { }

    @Entity
    public class Task {
        ...
        private TaskData data;

        public <T extends TaskData> T getData() {
            return (T) data;
        }
    }
   ```

   The type of form data depends on the user task. For moving
   casts out of business code, a convenience method `getData` is provided.

4. Since form data is never referred by other parts of the
   aggregate (due to its nature "unconfirmed data"), all form data
   classes extend `TaskData` (e.g. `AssessRiskFormData` ) are
   POJOs and serialized as JSON to a single CLOB column, instead of doing
   excessive JPA mapping.

   ```java
   @Type(JsonType.class)
   @Column(name = "DATA", columnDefinition = "CLOB")
   private TaskData data;
   ```

   ```java
   @JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "taskType")
   @JsonSubTypes({
   @JsonSubTypes.Type(value = AssessRiskFormData.class)
   })
   public interface TaskData { }
   ```

   The Hibernate custom type
   [JsonType](https://github.com/vladmihalcea/hypersistence-utils)
   is used to not deal with JSON serialization in business code.
   Jackson annotations are used to control the JSON generated.

## How it is used

### Initializing the user task form

Once the workflow runs into a user task VanillaBP executes the
method wired to the user task. This is the right place to initialize
task and form data:

```java
 @WorkflowTask
 public void assessRisk(
         final Aggregate loanApproval,
         @TaskId final String taskId) {

     // An empty object for user task form
     final var formData = new AssessRiskFormData();

     // Maybe formData is prefilled here with data from
     // the aggregate or data loaded using other services.

     // The task object storing common meta-data and the
     // form data specific to this user task:
     final var task = new Task();
     task.setTaskId(taskId);
     task.setCreatedAt(OffsetDateTime.now());
     task.setData(formData);

     // save task in the aggregate
     loanApproval.getTasks().put(taskId, task);
 }
```

On every rendering of the user task form by the UI, the form data
needs to be loaded to fill the form's input fields. At the first
time it will be the data the `formData` was initialized with.

### Intermediate save

Saving form data means to get the right task and update its data object's
attributes:

```java
 // load aggregate by its ID
 final Aggregate loanApproval = ...;

 // get task by its ID
 final var task = aggregate.getTask(taskId);

 // get form data
 final AssessRiskFormData formData = task.getData();

 // update attributes
 formData.setRiskAcceptable(riskAcceptableProvidedByUI);
```

### Completing the user task

On completing the user task these steps need to be done:
1. Validate form data.
1. Update form data for viewing the user task after completion.
1. Update form meta data to identify tasks already completed.
1. Update aggregate with validated form data.
2. Complete user task.

```java
 // load aggregate, task and form data
 final Aggregate loanApproval = ...;
 final var task = aggregate.getTask(taskId);
 final AssessRiskFormData formData = task.getData();

 // update attributes for showing the form later read-only
 // with values as they were on completion
 formData.setRiskAcceptable(riskAcceptableProvidedByUI);

 // validate input data if necessary

 // mark task as completed e.g. by setting the current timestamp
 // e.g. as an identifier to show the form read-only
 task.setCompletedAt(OffsetDateTime.now());

 // save confirmed data in aggregate
 loanApproval.setRiskAcceptable(riskIsAcceptable);

 // complete user task
 processService.completeUserTask(loanApproval, taskId);
```

On every rendering of the user task form by the UI after completing the task,
the form data needs to be loaded to fill the form's input fields which should
be shown read-only and action buttons deactivated.
