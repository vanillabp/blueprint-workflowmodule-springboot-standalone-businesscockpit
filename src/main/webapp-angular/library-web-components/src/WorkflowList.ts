import { userTaskColumns, workflowColumns } from "../../library/src/cells";
import { ColumnsOfWorkflowFunction, WorkflowListCell } from "@vanillabp/bc-shared";

// @ts-ignore
const buildVersion = process.env.BUILD_VERSION;
// @ts-ignore
const buildTimestamp = new Date(process.env.BUILD_TIMESTAMP);

const workflowListColumns: ColumnsOfWorkflowFunction = workflow => [
  workflowColumns['id'],
  workflowColumns['title'],
  workflowColumns['caseId'],
  workflowColumns['status'],
  workflowColumns['customerNumber'],
  workflowColumns['caseCreator'],
  workflowColumns['reportingDate'],
  userTaskColumns['createdAt'],
  userTaskColumns['deadline'],
];

const WorkflowListCellComponent: WorkflowListCell = ({defaultCell, ...props}) => defaultCell({...props});

export {
  buildVersion,
  buildTimestamp,
  workflowListColumns,
  WorkflowListCellComponent as WorkflowListCell
}
