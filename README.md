![VanillaBP](readme/vanillabp-headline.png)

# blueprint-workflowmodule-springboot-standalone-businesscockpit

A **blueprint** of a standalone Spring Boot application including the *
*[Vanillabp Business Cockpit](https://github.com/vanillabp/business-cockpit/tree/feature/documentation)**
demonstrating how to use [VanillaBP SPI](https://github.com/vanillabp/spi-for-java) and
the [Business Cockpit SPI](https://github.com/vanillabp/business-cockpit/tree/feature/documentation/spi-for-java) for
BPMN-based workflows. This
example covers a very minimal set of scenarios for developing business process applications and serves as a starting
point for more complex use cases.

This blueprint is an extension from the standalone project and therefore doesn't have all the details when it comes to
the processes and tasks itself. To see all those details
[click here](https://github.com/vanillabp/blueprint-workflowmodule-springboot-standalone/tree/wip).

![demo.bpmn](readme/Standalone_BPMN_Process.png)

## Getting Started

1. **Create an empty project and run:**
   ```shell
    mvn archetype:generate
    -DarchetypeGroupId=io.vanillabp.blueprint
    -DarchetypeArtifactId=workflowmodule-springboot-standalone-businesscockpit-archetype
    -DgroupId={your.groupId}
    -DartifactId={your.artifactId}
    -Dversion={your.version}
    ```
   *Hint:* If you want a specific verison add `-DarchetypeVersion={e.g 0.0.1}`
2. **Build the Project**
   ```shell
   mvn clean package -Pcamunda7
    ```
3. **Start the Project**
   ```shell
   java -jar /target/demo.jar --spring.profiles.active=camunda7
   ```

To start the project with the `camunda8` profile see
this [specific README](https://github.com/vanillabp/blueprint-workflowmodule-springboot-standalone/blob/wip/CAMUNDA8.md)

## Business cockpit

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
