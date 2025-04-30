import {bootstrapWebComponent} from "./bootstrap.utils";
import {WorkflowPageComponent} from "../../../library/src/workflow-page.component";

const componentName = 'loan-approval-workflow-form';

(async () => await bootstrapWebComponent(componentName, WorkflowPageComponent))();

export {componentName};