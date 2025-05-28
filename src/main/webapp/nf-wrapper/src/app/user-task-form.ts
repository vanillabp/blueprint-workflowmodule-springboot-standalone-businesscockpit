import { bootstrapWebComponent } from "./bootstrap.utils";
import { UserTaskFormComponent } from "../../../library/src/user-task-form.component";

const componentName = 'loan-approval-user-task-form';

(async () => await bootstrapWebComponent(componentName, UserTaskFormComponent))();

export {componentName};