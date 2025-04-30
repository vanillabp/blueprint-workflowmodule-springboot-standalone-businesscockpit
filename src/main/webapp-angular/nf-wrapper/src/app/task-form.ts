import {bootstrapWebComponent} from "./bootstrap.utils";
import {UserTaskComponent} from "../../../library/src/user-task.component";

const componentName = 'loan-approval-task-form';

(async () => await bootstrapWebComponent(componentName, UserTaskComponent))();

export {componentName};