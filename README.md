![VanillaBP](readme/vanillabp-headline.png)

# Blueprint "Standalone leveraging Business Cockpit"

A **blueprint** of a standalone Spring Boot application leveraging the
**[VanillaBP Business Cockpit](https://github.com/vanillabp/business-cockpit/)**
demonstrating how to use the [VanillaBP SPI](https://github.com/vanillabp/spi-for-java) and
the [VanillaBP Business Cockpit SPI](https://github.com/vanillabp/business-cockpit/tree/feature/documentation/spi-for-java) for
BPMN-based workflows. The Business Cockpit is a web application for
business users to fulfill user tasks part of a workflow
as well as for providing business data to running workflows.

This blueprint is an extension of the
["Standalone" blueprint](https://github.com/vanillabp/blueprint-workflowmodule-springboot-standalone)
and therefore descriptions do not cover details already explained there.

In order to develop a better understanding of the use of VanillaBP,
a concrete technical process “loan approval” is used instead of an abstract
demo process. This
example covers a very minimal set of scenarios for developing business process applications and serves as a starting
point for more complex use cases:

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

This demo provides UI components for completing the loan approval
workflow, including user tasks.
Those UI components are meant to be shown as part of the
VanillaBP Business Cockpit.
Therefore, the
[Business Cockpit needs to be available](#running-the-business-cockpit)
while using the demo.
As a simpler alternative you may [run the
Business Cockpit DevShell](#running-the-business-cockpit-devshell)
instead, which is a replacement of the Business Cockpit typically used for
simple local development of those UI components.

To go through the entire loan approval follow these steps:

1. Start processing of loan approval using this URL:<br>
   [http://localhost:8080/api/loan-approval/request-loan-approval?loanAmount=1000](http://localhost:8080/api/loan-approval/request-loan-approval?loanAmount=1000)<br>
   As a result you will get the loan approval's request ID needed in subsequent URLs.
1. Open Business Cockpit or DevShell: http://localhost:9080
1. *In the Business Cockpit: Change to list of user tasks and select the task "Assess risk".
1. In DevShell:
   1. Checkout logs or the h2 database for retrieving the ID of the user task `Assess risk`.
   1. Enter the user task ID in the web application to load the task
1. Complete or save the user task by using the UI loaded.
1. The service task "Transfer money" is executed depending on the value chosen for `riskAcceptable`.

*Hints:*
- To see currently running processes or user tasks use [your local Camunda 7 Cockpit](http://localhost:8080/camunda).
- For running this demo using Camunda 8 checkout [Camunda 8 README](./CAMUNDA8.md#setup-instructions).

## Interesting to know

The default Maven profile is `camunda7`, which includes the [Camunda 7 adapter](https://github.com/camunda-community-hub/vanillabp-camunda7-adapter) dependency.
Additionally, a Spring profile `camunda7` needs to be used at runtime providing proper configuration.
For **Camunda 8** the respective profile `camunda8` has to be used.
Refer to the [specific README](./CAMUNDA8.md) since additional setup is required.

This blueprint implements two main patterns typically to VanillaBP applications
integrating into a Business Cockpit:

1. How to store data entered into user task forms.<br>Find this pattern
   [explained in detail here](./FORMDATA.md).
1. How to integrate user tasks hosted by a (micro-)service
   into a Business Cockpit UI instead of providing a UI per
   (micro-)service.<br>This pattern is
   [explained in detail here](./WEBAPP.md).


## Building an application for your own use case

If you want to use the project generated based on the archetype
as a base for your use case, then

1. choose a proper identifier for your business use case.
1. rename the Java package `blueprint.workflowmodule.standalone.loanapproval` according to your
   projects package and use case identifier (e.g. `com.mycompany.myusecase`).
1. search case-insensitive in all files for all occurrences of
   `loanapproval` or `loan-approval` and replace it by the identifier of your
   use case.
1. search case-insensitive in all files for all occurrences of
   `assessrisk` or `assess-risk` and copy and replace it by the identifier of your
   `use case` user tasks.
1. place your BPMN file in the directory
   `src/main/resources/processes/camunda7` and change the annotation `@BpmnProcess`
   found in Java class `service` pointing to your BPMN file's name.

## Running the Business Cockpit

Instructions at a glance:

1. Clone the [business cockpit repository](https://github.com/vanillabp/business-cockpit).
1. Follow the
   [detailed instructions](https://github.com/vanillabp/business-cockpit/blob/feature/documentation/container/README.md#as-is)
   which are:
   1. Run a local MongoDB database.
   1. Download the prebuilt JAR.
   1. Run the JAR using port `9080` to avoid conflicts with the blueprint demo application:
      ```shell
      java -Dserver.port=9080 -jar bc.jar
      ```
   1. Open [local Business Cockpit](http://localhost:9080) in Browser.

## Running the Business Cockpit DevShell

The DevShell is a tiny web application used for local development of user tasks
and other workflow specific UIs. It mimics the situation integrating those UI
components and handing over data about the user task.

This data was previously automatically reported to the Business Cockpit by the
business application and is fetched by the DevShell on loading the user task.
To avoid running the Business Cockpit one can run the
[DevShell Simulator](https://github.com/vanillabp/business-cockpit/tree/main/development/dev-shell-simulator)
instead. It provides all internal APIs required during data reporting but
stores data only in-memory which is typically sufficient for local development
and testing.

Instructions at a glance:

1. Download JAR from Maven-Central or the latest [snapshot](https://github.com/orgs/vanillabp/packages?q=dev&tab=packages&q=dev-shell-simulators).
1. Run the JAR
   ```shell
   java -jar dev-shell-simulator.jar
   ```
1. In this demo project open directory `src/main/webapp` in terminal.
1. Install NPM packages required:
   ```shell
   npm install
   ```
1. Start DevShell:
   ```shell
   npm start
   ```

## Noteworthy & Contributors

VanillaBP was developed by [Phactum](https://www.phactum.at) with the intention of giving back to the community as it
has benefited the community in the past.\
![Phactum](readme/phactum.png)

## License

Copyright 2025 Phactum Softwareentwicklung GmbH

Licensed under the Apache License, Version 2.0
