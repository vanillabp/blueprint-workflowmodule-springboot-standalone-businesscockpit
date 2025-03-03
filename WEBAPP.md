![VanillaBP](readme/vanillabp-headline.png)

# Web App

## Overview:
This web application serves as a front-end for managing user tasks within a workflow system.
It interacts with a backend via a REST API to fetch, display, and update user tasks.

### Development Package "dev-shell"
The application includes a development package called `development` (also called *dev-shell*) that enables hot module replacement (HMR).
This allows developers to see changes in real-time without needing to restart the application.

## Project structure and thoughts

For a detailed structure and the reason why we structured the webapp this way see `/src/UserTaskForm.tsx`.

## Setup and Running the Web App:
1. Install dependencies:
    ```shell
   cd webapp/
    npm install
    ```
2. Build the application:
   ```shell
    npm run build
   ```

3. Start the application:
    ```sh
    npm start
    ```

## How It Works:
- The web app retrieves user tasks and processes.
- Each task has a simple text input field.
- Upon submitting a task, the app will send a request to the REST API.

### Actions:
- `handleCompleteTask` will send a *POST* request to backend completing the task and continuing the process.
- `handleSaveTask` will send a *PUT* request, saving data of the task.
- `handleCancelTask` will send a *DELETE* request, canceling the task.

### Development Mode:
- Running the app with the *dev-shell* allows hot module replacement.
- Changes to the source code are reflected instantly in the browser without a full refresh.

## Noteworthy & Contributors

VanillaBP was developed by [Phactum](https://www.phactum.at) with the intention of giving back to the community as it
has benefited the community in the past.\
![Phactum](readme/phactum.png)

## License

Copyright 2025 Phactum Softwareentwicklung GmbH

Licensed under the Apache License, Version 2.0
