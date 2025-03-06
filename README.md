![VanillaBP](readme/vanillabp-headline.png)

# Blueprint "Standalone leveraging Business Cockpit"

A **blueprint** of a standalone Spring Boot application including the
**[VanillaBP Business Cockpit](https://github.com/vanillabp/business-cockpit/)**
demonstrating how to use the [VanillaBP SPI](https://github.com/vanillabp/spi-for-java) and
the [VanillaBP Business Cockpit SPI](https://github.com/vanillabp/business-cockpit/tree/feature/documentation/spi-for-java) for
BPMN-based workflows. This
example covers a very minimal set of scenarios for developing business process applications and serves as a starting
point for more complex use cases.

This blueprint is an extension of the
[standalone blueprint](https://github.com/vanillabp/blueprint-workflowmodule-springboot-standalone)
and therefore descriptions do not cover details already explained there.

In order to develop a better understanding of the use of vanillabp,
a concrete technical process “loan approval” is used instead of an abstract
demo process:

![loan_approval.bpmn](readme/loan-approval-process.png)

## Getting Started

1. **Create an empty project directory and run:**
   ```shell
    mvn archetype:generate \
    -DarchetypeGroupId=io.vanillabp.blueprint \
    -DarchetypeArtifactId=workflowmodule-springboot-standalone-businesscockpit-archetype \
    -DgroupId={your.groupId} \
    -DartifactId={your.artifactId} \
    -Dversion={your.version}
    ```
   *Hint:* If you want a specific archetype version add `-DarchetypeVersion={e.g 0.0.1}`
   <br>&nbsp;
1. **Build the application:**
   ```shell
   mvn clean package -Pcamunda7
    ```
1. **Start the application:**
   ```shell
   java -jar target/loan-approval.jar --spring.profiles.active=camunda7
   ```

## Using the demo

This demo includes UI components used to complete the loan approval
workflow. These UI components are meant to be shown by the
VanillaBP Business Cockpit. Therefore, the
[Business Cockpit needs to be available](#running-the-business-cockpit)
one using the demo.  As a simpler alternative you may [run the
Business Cockpit DevShell](#running-the-business-cockpit-devshell)
instead, which is replacement of the Business Cockpit used for easier
development of those UI components.

To go through the entire loan approval follow these steps:

1. Start processing of loan approval using this URL:<br>
   [http://localhost:8080/api/loan-approval/request-loan-approval?loanAmount=1000](http://localhost:8080/api/loan-approval/request-loan-approval?loanAmount=1000)<br>
   As a result you will get the loan approval's request ID needed in subsequent URLs.
1. Checkout logs for retrieving the ID of the user task "Assess risk".
1. Complete the user task by either accepting or denying the risk by this URL:<br>
   [http://localhost:8080/api/loan-approval/{loanRequestId}/assess-risk/{taskId}?riskIsAcceptable=true](http://localhost:8080/api/loan-approval/{loanRequestId}/assess-risk/{taskId}?riskIsAcceptable=true)<br>
   (replace placeholders by the values collected in previous steps)
1. The service task "Transfer money" is executed depending on the value chosen for "riskIsAcceptable".

*Hints:*
- To see currently running processes use [your local Camunda 7 Cockpit](http://localhost:8080/camunda).
- For running this demo using Camunda 8 checkout [Camunda 8 README](./CAMUNDA8.md#setup-instructions).

## Interesting to know

The default Maven profile is `camunda7`, which includes the [Camunda 7 adapter](https://github.com/camunda-community-hub/vanillabp-camunda7-adapter) dependency.
Additionally, a Spring profile `camunda7` needs to be used at runtime providing proper configuration.
For **Camunda 8** the respective profile `camunda8` has to be used.
Refer to the [specific README](./CAMUNDA8.md) since additional setup is required.


## Building an application for your own use case

If you want to use the project generated based on the archetype
as a base for your use case, then

1. choose a proper identifier for your business use case.
1. rename the Java package `blueprint.workflowmodule.standalone.loanapproval` according to your
   projects package and use case identifier (e.g. `com.mycompany.myusecase`).
1. search case-insensitive in all files for all occurrences of
   `loanapproval` or `loan-approval` and replace it by the identifier of your
   use case.
1. place your BPMN file in the directory
   `src/main/resources/processes/camunda7` and change the annotation `@BpmnProcess`
   found in Java class `service` pointing to your BPMN file's name.

## Running the Business Cockpit

For the VanillaBP Business Cockpit to work follow
the [As-Is Guide](https://github.com/vanillabp/business-cockpit/blob/feature/documentation/container/README.md#as-is).

Here a simplified version:

1. In the development package of the business-cockpit project:
    ```shell
    docker compose up -d
    ```
2. Add `127.0.0.1 business-cockpit-mongo` to your local hosts file.
3. Download the container-JAR, rename it to bc.jar and put it into this project.
4. Start the bc.jar:
    ```shell
    java -jar bc.jar
    ```
5. Authenticate with `test` as username and password under [http://localhost:8080/](http://localhost:8080/)
6. Start the standalone-businesscockpit application, and you should be able to see your workflow and your task in the
   respective Lists.

## Running the Business Cockpit DevShell


## Web app

To know more about the webapp [click here](./WEBAPP.md)

## Dev-shell-simulator

For developing, we recommend using
the [dev-shell-simulator](https://github.com/vanillabp/business-cockpit/tree/feature/development-simulator/development/dev-shell-simulator)

## TaskEntity and TaskFormData Patterns

### Why This Pattern?

When a user interacts with a task, they may save intermediate progress before completing it. Instead of persisting this
data directly within the aggregate, we use a `LoanApprovalTaskEntity` that acts as a mapping for user task data. This
approach provides several advantages:

1. **Separation of Concerns** – The aggregate represents the overall state of the workflow, while individual user task
   data is handled separately.
2. **Intermediate Saves** – Users can save task data without committing it to the aggregate, allowing flexibility in the
   approval process.
3. **Data Consistency** – The aggregate remains clean and only gets updated with finalized decisions when a task is
   completed.
4. **Auditability** – Keeping task data in separate entities allows tracking changes, timestamps, and user inputs before
   finalizing the workflow.

### How It Works

1. When a user task is started, we create `LoanApprovalTaskEntity` corresponding to the task ID. This entity includes:
    - Task metadata (e.g., creation timestamp)
    - A `LoanApprovalTaskFormDataImpl` object that stores the user’s input in JSON format. (In this case it is only the `riskAcceptable` Boolean)
2. The aggregate maintains a **mapping** to the `LoanApprovalTaskEntity`, rather than storing the data itself.
3. When the task is **completed**, relevant data from `LoanApprovalTaskFormDataImpl` is transferred to the aggregate,
   the task completion timestamp is set, and the workflow proceeds.

### Example Flow

1. **User saves task** → Data is stored in `FORM_DATA` of the `LoanApprovalTaskEntity` table. (not in the aggregate).
2. **User resumes task** → Data is retrieved from `FORM_DATA` of the `LoanApprovalTaskEntity` table.
3. **User completes task** →
    - `riskAcceptable` from `LoanApprovalTaskFormDataImpl` is saved into the aggregate.
    - The task’s `completedAt` timestamp is updated.
    - The user task is marked as completed in the workflow.

This approach ensures a structured, maintainable workflow while keeping the aggregate focused on finalized business
decisions. 🚀


## Noteworthy & Contributors

VanillaBP was developed by [Phactum](https://www.phactum.at) with the intention of giving back to the community as it
has benefited the community in the past.\
![Phactum](readme/phactum.png)

## License

Copyright 2025 Phactum Softwareentwicklung GmbH

Licensed under the Apache License, Version 2.0
