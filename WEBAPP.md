![VanillaBP](readme/vanillabp-headline.png)

# Blueprint "Standalone leveraging Business Cockpit"

## How to integrate into VanillaBP Business Cockpit UI

Business processing applications typically provide UIs for situations like
initializing a use case (causing a workflow to start), user task fulfillment (human
support required as part of the workflow) and managing cases in progress
(workflows currently running or workflows already done).

When using the VanillaBP Business Cockpit those UIs are provided
by the business processing (micro-)service of a particular use case
like the loan approval of this blueprint. In terms of VanillaBP a use case
is called a [workflow module](https://github.com/vanillabp/spring-boot-support#workflow-modules).

Technically, those fragments of the workflow UI
are bundled as one [federated module](https://module-federation.io/),
hosted by the use case's (micro-)service and loaded by the VanillaBP
Business Cockpit web application whenever parts of the use case
(e.g. a user task) needs to be displayed.

There are four mandatory parts expected by the VanillaBP Business Cockpit
which needs to be exposed as entry points by the bundled federation module
using these identifiers:


1. `WorkflowPage`: A UI component responsible for
   rendering any workflow's page of the use case
   (see chapter [Workflow page](#workflow-page)).
1. `WorkflowList`: A function returning the columns to be shown
   for a particular workflow in the list of workflows
   and a UI component responsible for rendering those custom cells in the
   list of workflows (see chapter [List of workflows](#list-of-workflows)).
1. `UserTaskForm`: A UI component responsible for
   rendering any user task form of the use case
   (see chapter [User task form](#user-task-form)).
1. `UserTaskList`: A function returning the columns to be shown
   for a particular user task in the list of user tasks
   and a UI component responsible for rendering those custom cells in the
   list of user tasks (see chapter [List of user tasks](#list-of-user-tasks)).

These parts are configured in the
[config section of module federation](./src/main/webapp/craco.config.js).
Additionally, one can expose other entry points which may be used in
other parts of a customized VanillaBP Business Cockpit
like the menu, the header section, etc..

## Workflow page

This is a UI component responsible for rendering any workflow's page
of the use case. In most scenarios the workflow page shows details of the
use case the workflow represents and provides actions to manage
the workflow (e.g. abort the workflow). All this has to be
fulfilled by the workflow module's (micro-)service (see
[Loading from and sending data to the (micro-)service](#loading-from-and-sending-data-to-the-micro-service)).

The VanillaBP Business Cockpit does not know about what workflows
exactly are operated by a (micro-)service/use case. It only knows about the
[workflow module](https://github.com/vanillabp/spring-boot-support#workflow-modules) the workflow belongs to. So, whenever a workflow page needs
to be rendered, the Business Cockpit loads the federation module
for its workflow module and renders the UI component exposed under
the entry point `WorkflowPage`.

Since the workflow module may operate more than one process to fulfill
the needs of the use case it is about, the `WorkflowPage` UI component
is mainly responsible for selecting the right UI component for
the workflow requested. Typically, this is done based on the BPMN process ID,
the unique identifier of a process defined in a BPMN file:

[src/main/webapp/src/WorkflowPage.tsx](./src/main/webapp/src/WorkflowPage.tsx):
```typescript
import { WorkflowPage } from '@vanillabp/bc-shared';

// lazy loading: any particular workflow page
// is only loaded when requested
const LoanApprovalWorkflowPage = lazy(() => import('./loan-approval/WorkflowPage'));

const WorkflowPageComponent: WorkflowPage = ({ workflow }) => {
    if (workflow.bpmnProcessId === 'loan_approval') {
        return <LoanApprovalWorkflowPage workflow={ workflow } />;
    } else if (...) {
        ...
    } else {
        return <div>{ `unknown BPMN process ID '${workflow.bpmnProcessId}'` }</div>
    }
}

export { WorkflowPageComponent as WorkflowPage };
```

[src/main/webapp/src/loan-approval/WorkflowPage.tsx](./src/main/webapp/src/loan-approval/WorkflowPage.tsx):

```typescript
import { WorkflowPage } from '@vanillabp/bc-shared';

const LoanApprovalWorkflowPage: WorkflowPage = ({ workflow }) => {
  return <div>...the workflow page...</div>;
}

export default LoanApprovalWorkflowPage;
```

The UI component gets passed a parameter `workflow`
(type [BcWorkflow](https://github.com/vanillabp/business-cockpit/blob/main/ui/bc-shared/src/types/BcWorkflow.ts))
which holds all information of that workflow known to the VanillaBP
Business Cockpit as well as functions to trigger functionality
provided by the Business Cockpit (e.g. loading all user tasks for
the workflow currently rendered).

## List of workflows

When showing a use case's workflow in the 
VanillaBP Business Cockpit list of workflows, then
custom columns, specific to the use case, can be
shown. This provides the ability to sort and search
workflows by business data. As a consequence, the
total amount of columns shown in the list of workflows
depends on the workflows visible in the list.
Typically, the number of columns shown is limited because
users are only allowed to see workflows according to their
roles. That means different users will see different sets of columns.

In this blueprint no custom columns are defined
(see [src/main/webapp/src/WorkflowList.tsx](./src/main/webapp/src/WorkflowList.tsx)).
For details how configure custom columns checkout
the [VanillaBP Business Cocckpit documentation](https://www.github.com/vanillabp/business-cockpit).

## User task form

This is a UI component responsible for rendering any user task form
of the (micro-)service's BPMN processes.
In most scenarios the user task form shows details of the
use case the workflow represents next to the user task form
and provides actions to manage
the user task (e.g. save, complete). All this has to be
fulfilled by the workflow module's (micro-)service (see
[Loading from and sending data to the (micro-)service](#loading-from-and-sending-data-to-the-micro-service)).

The VanillaBP Business Cockpit does not know about what workflows
or user tasks exactly are operated by a (micro-)service/use case.
It only knows about the
[workflow module](https://github.com/vanillabp/spring-boot-support#workflow-modules) the user task belongs to. So, whenever a user task form needs
to be rendered, the Business Cockpit loads the federation module
for its workflow module and renders the UI component exposed under
the entry point `UserTaskForm`.

Since the workflow module may operate more than one process and multiple user
task to fulfill
the needs of the use case it is about, the `UserTaskForm` UI component
is mainly responsible for selecting the right UI component for
the user task requested.

Typically, this is done in two steps:
1. Figure out which is the right process.
1. Figure out which is the right user task form within the process.

[src/main/webapp/src/UserTaskForm.tsx](./src/main/webapp/src/UserTaskForm.tsx):

```typescript
import { UserTaskForm } from '@vanillabp/bc-shared';

// lazy loading: any particular process user task
// is only loaded when requested
const LoanApprovalUserTaskForm = lazy(() => import('./loan-approval/UserTaskForm'));

const UserTaskWorkflowComponent: UserTaskForm = ({ usertask }) => {
    if (usertask.bpmnProcessId === 'loan_approval') {
        return <LoanApprovalUserTaskForm usertask={ usertask } />;
    } else if (...) {
        ...
    } else {
        return <div>{ `unknown BPMN process ID '${usertask.bpmnProcessId}'` }</div>
    }
}

export { UserTaskWorkflowComponent as UserTaskForm };
```

[src/main/webapp/src/loan-approval/UserTaskForm.tsx](./src/main/webapp/src/loan-approval/UserTaskForm.tsx):

```typescript
import { UserTaskForm } from '@vanillabp/bc-shared';

// lazy loading: any particular user task
// is only loaded when requested
const AssessRiskUserTaskForm = lazy(() => import('./assess-risk-form/UserTaskForm'));

const LoanApprovalUserTaskForm: UserTaskForm = ({ usertask }) => {
    if (usertask.taskDefinition === 'assessRisk') {
        return <AssessRiskUserTaskForm usertask={ usertask } />;
    } else if (...) {
        ...
    } else {
        return <div>{ `unknown user task '${usertask.taskDefinition}' in BPMN process ID '${usertask.bpmnProcessId}'` }</div>
    }
}

export default LoanApprovalUserTaskForm;
```

[src/main/webapp/src/loan-approval/assess-risk-form/UserTaskForm.tsx](./src/main/webapp/src/loan-approval/assess-risk-form/UserTaskForm.tsx):

```typescript
import { UserTaskForm } from '@vanillabp/bc-shared';

const AssessRiskUserTaskForm: UserTaskForm = ({ usertask }) => {
  return <div>...the user task form...</div>;
}

export default AssessRiskUserTaskForm;
```

The UI component gets passed a parameter `usertask`
(type [BcUserTask](https://github.com/vanillabp/business-cockpit/blob/main/ui/bc-shared/src/types/BcUserTask.ts))
which holds all information of that user task known to the VanillaBP
Business Cockpit as well as functions to trigger functionality
provided by the Business Cockpit (e.g. claiming the user task).

## List of user tasks

When showing a use case's user task in the
VanillaBP Business Cockpit list of user tasks, then
custom columns, specific to the use case, can be
shown. This provides the ability to sort and search
user tasks by business data. As a consequence, the
total amount of columns shown in the list of user tasks
depends on the user tasks visible in the list.
Typically, the number of columns is limited because
users are only allowed to see user tasks according to their
roles. That means different users will see different sets of columns.

In this blueprint no custom columns are defined
(see [src/main/webapp/src/UserTaskList.tsx](./src/main/webapp/src/UserTaskList.tsx)).
For details how configure custom columns checkout
the [VanillaBP Business Cocckpit documentation](https://www.github.com/vanillabp/business-cockpit).

## Loading from and sending data to the (micro-)service

If a UI component provided by a federated module is rendered
by the VanillaBP Business Cockpit, then (to the Browser)
it is part of the same VanillaBP Business Cockpit web page.

Having this in mind, one will experience cross-site-scripting
issues when loading form data from or sending form data to
the use case's (micro-)service, since the hostname and/or
the port of the VanillaBP Business Cockpit URL is a different one.

To avoid this, the VanillaBP Business Cockpit acts as a
proxy for all workflow modules forwarding requests to
the use case's (micro-)service. A workflow module has to
configure the internal URI as an endpoint for the proxy:

```yaml
vanillabp:
  workflow-modules:
    loan-approval:
      cockpit:
        workflow-module-uri: http://localhost:8080
```

On starting the (micro-)service the Business Cockpit adapter
will register all workflow modules to
the Business Cockpit. This causes the VanillaBP Business Cockpit
to initialize the proxy. The public endpoint is exposed at the path
`/wm/` concatenated 
with the workflow module's ID (e.g. `/wm/loan-approval`) and is forwarded
to the workflow module's URI. This public 
proxy endpoint can be used by the workflow module's UI components to
reach the use case's (micro-)service without causing
cross-site-scripting issues.

*Hint:* Using the proxy URL also needs to be done during development
using the [DevShell](./README.md#running-the-business-cockpit-devshell)
as the same UI components are rendered as part of the
Business Cockpit and as part of the DevShell web application. Technically,
this is achieved by using [a Webpack dev-server proxy](./src/main/webapp/craco.config.js).

## Noteworthy & Contributors

VanillaBP was developed by [Phactum](https://www.phactum.at) with the intention of giving back to the community as it
has benefited the community in the past.\
![Phactum](readme/phactum.png)

## License

Copyright 2025 Phactum Softwareentwicklung GmbH

Licensed under the Apache License, Version 2.0
