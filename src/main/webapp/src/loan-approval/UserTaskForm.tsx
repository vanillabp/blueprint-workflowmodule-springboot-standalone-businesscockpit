import { lazy } from "react";
import { Text } from "grommet";
import { UserTaskForm as UserTaskFormComponent } from "@vanillabp/bc-shared";
import { TaskDefinition as AssessRisk } from "./assess-risk-form";

const AssessRiskForm = lazy(() => import("./assess-risk-form/UserTaskForm"));

const UserTaskForm: UserTaskFormComponent = ({ userTask }) =>
  userTask.taskDefinition === AssessRisk ? (
    <AssessRiskForm userTask={userTask} />
  ) : (
    <Text>{`unknown task '${userTask.taskDefinition}'`}</Text>
  );

export default UserTaskForm;
