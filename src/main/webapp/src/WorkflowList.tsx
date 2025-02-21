import { ColumnsOfWorkflowFunction, WorkflowListCell } from '@vanillabp/bc-shared';

const buildVersion = process.env.BUILD_VERSION;
const buildTimestamp = new Date(process.env.BUILD_TIMESTAMP);

const workflowListColumns: ColumnsOfWorkflowFunction = workflow => {
  return undefined;
};

const WorkflowListCellComponent: WorkflowListCell = ({
  defaultCell,
  ...props
}) => {
  const DefaultCell = defaultCell;
  return <DefaultCell { ...props } />;
}

export {
  buildVersion,
  buildTimestamp,
  workflowListColumns,
  WorkflowListCellComponent as WorkflowListCell
};
