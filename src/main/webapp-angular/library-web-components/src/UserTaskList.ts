import {userTaskColumns} from "../../library/src/cells";
import {ColumnsOfUserTaskFunction, UserTaskListCell} from "@vanillabp/bc-shared";

// @ts-ignore
const buildVersion = process.env.BUILD_VERSION;
// @ts-ignore
const buildTimestamp = new Date(process.env.BUILD_TIMESTAMP);

const userTaskListColumns: ColumnsOfUserTaskFunction = userTask => [
  userTaskColumns['id'],
  userTaskColumns['title'],
  userTaskColumns['workflowTitle'],
  userTaskColumns['caseId'],
  userTaskColumns['status'],
  userTaskColumns['customerNumber'],
  userTaskColumns['deadline'],
  userTaskColumns['caseCreator'],
  userTaskColumns['reportingDate'],
  userTaskColumns['createdAt'],
];

const UserTaskListCellComponent: UserTaskListCell = ({defaultCell, ...props}) => defaultCell({...props});

export {
  buildVersion,
  buildTimestamp,
  userTaskListColumns,
  UserTaskListCellComponent as UserTaskListCell,
}
