import { lazy } from 'react';
import { Text } from 'grommet';
import { UserTaskForm as UserTaskFormComponent } from '@vanillabp/bc-shared';
import { TaskDefinition as AssessRisk } from "./assess-risk-form";

const TheTask = lazy(() => import('./assess-risk-form/AssessRiskForm'));

const UserTaskForm: UserTaskFormComponent = ({ userTask }) =>
    userTask.taskDefinition === AssessRisk
        ? <TheTask userTask={ userTask } />
        : <Text>{ `unknown task '${userTask.taskDefinition}'` }</Text>;

export default UserTaskForm;
