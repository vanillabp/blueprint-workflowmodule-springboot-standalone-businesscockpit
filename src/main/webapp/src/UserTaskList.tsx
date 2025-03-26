import { ColumnsOfUserTaskFunction, UserTaskListCell } from '@vanillabp/bc-shared';

const buildVersion = process.env.BUILD_VERSION;
const buildTimestamp = new Date(process.env.BUILD_TIMESTAMP);

const userTaskListColumns: ColumnsOfUserTaskFunction = userTask => undefined;

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
