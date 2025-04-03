![VanillaBP](readme/vanillabp-headline.png)

# Running blueprint "Standalone" using Camunda 8

This is a set of minimal instructions. Read more in the [Camunda 8 Docs](https://docs.camunda.io/).

As of version 8.6, Camunda does not support custom tasklist applications
(like the VanillaBP Business Cockpit) out of the box. The features necessary will
be introduced in version 8.8. As a temporary workaround, Zeebe (the BPMN engine
of Camunda 8) supports to export events. For VanillaBP Business Cockpit
those events are exported to Kafka. The VanillaBP Business Cockpit Camunda 8
adapter consumes those events as a substitute for the missing custom tasklist
application support of Camunda 8.6. Therefore, a copy of the original
[Camunda 8 Platform Docker compose setup](https://github.com/camunda/camunda-platform),
extended by adding Kafka support, is part of this repository and is required
to run applications based on this blueprint.

## Setup Instructions

1. **Download Docker compose** for Camunda 8 with Kafka exporter pre-installed
   [ZIP file](https://github.com/Phactum/zeebe-kafka-exporter#docker).
1. **Start Camunda 8 with Kafka** by using:
   ```bash
   unzip camunda-8.6-kafka.zip
   cd camunda-8.6-kafka
   docker compose up -d
   ```
1. Wait a few minutes for the system to initialize.

## Run Configuration

1. Build the project using Maven profile `camunda8`:
    ```shell
    mvn clean package -Pcamunda8
    ```
2. Run the application using the `camunda8` Spring profile:
    ```shell
    java -jar target/loan-approval.jar --spring.profiles.active=camunda8
    ```

Now you can go through the instructions ["Using the demo"](./README.md#using-the-demo)
and watch the process in your local [Camunda 8 Operate](http://localhost:8081).

## Tenant Configuration

Business Cockpit application needs to use tenants. Follow these steps for proper setup:

1. Make sure the Camunda 8 docker compose is up.
1. Open Identity: [http://localhost:8084](http://localhost:8084)
1. Login:
    - **Username:** `demo`
    - **Password:** `demo`
1. Create a new tenant:
    - Go to **Tenants** → **Create Tenant**
    - Set the Tenants **Name** and **ID** as `loan-approval` (Name of the Spring-boot application).
    - Afterwards select the tenant created
1. Assign user to tenant:
    - Go to **Assigned users** → **Assign users** → type/select the demo user
1. Assign applications to tenant:
    - Go to the **Assigned applications** tab
    - Click **Assign application** and add:
        - `tasklist`
        - `operate`
        - `zeebe`

## Noteworthy & Contributors

VanillaBP was developed by [Phactum](https://www.phactum.at) with the intention of giving back to the community as it has benefited the community in the past.\
![Phactum](readme/phactum.png)

## License

Copyright 2025 Phactum Softwareentwicklung GmbH

Licensed under the Apache License, Version 2.0
