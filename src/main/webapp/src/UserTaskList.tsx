import { ColumnsOfUserTaskFunction, UserTaskListCell } from '@vanillabp/bc-shared';
import { userTaskColumns } from "./shared/cells";

const buildVersion = process.env.BUILD_VERSION;
const buildTimestamp = new Date(process.env.BUILD_TIMESTAMP);

const userTaskListColumns: ColumnsOfUserTaskFunction = userTask => [
  userTaskColumns['id'],
  userTaskColumns['caseId'],
  userTaskColumns['title'],
  userTaskColumns['dueDate'],
  userTaskColumns['assignee'],
  userTaskColumns['candidateUsers'],
  userTaskColumns['circle'],
  userTaskColumns['workflowTitle'],
  userTaskColumns['followUpDate'],
];

const UserTaskListCellComponent: UserTaskListCell = ({
  defaultCell,
  ...props
}) => {
  const DefaultCell = defaultCell;
  return <DefaultCell { ...props } />;
}

export {
  buildVersion,
  buildTimestamp,
  userTaskListColumns,
  UserTaskListCellComponent as UserTaskListCell
};
