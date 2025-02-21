import { lazy } from 'react';
import { Text } from 'grommet';
import { UserTaskForm as UserTaskFormComponent } from '@vanillabp/bc-shared';
import { TaskDefinition as TheTaskTaskDefinition } from "./the-single-task-form";

const TheTask = lazy(() => import('./the-single-task-form/UserTaskForm'));

const UserTaskForm: UserTaskFormComponent = ({ userTask }) =>
    userTask.taskDefinition === TheTaskTaskDefinition
        ? <TheTask userTask={ userTask } />
        : <Text>{ `unknown task '${userTask.taskDefinition}'` }</Text>;

export default UserTaskForm;
