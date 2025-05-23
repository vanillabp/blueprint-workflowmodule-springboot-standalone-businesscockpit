import { bootstrapDevShell } from "@vanillabp/bc-dev-shell-react";
import { UserTaskForm } from "../src/UserTaskForm";
import { UserTaskListCell, userTaskListColumns } from "../src/UserTaskList";
import { WorkflowListCell, workflowListColumns } from "../src/WorkflowList";
import { WorkflowPage } from "../src/WorkflowPage";
import { UiUriType } from "@vanillabp/bc-official-gui-client";
import { theme } from "@vanillabp/bc-shared";

bootstrapDevShell(
  "root",
  {
    workflowModuleId: "loan-approval",
    workflowModuleUri: "/wm/loan-approval",
    uiUriType: UiUriType.WebpackMfReact,
    uiUri: "/wm/loan-approval/remoteEntry.js",
  },
  theme,
  "/official-api/v1",
  UserTaskForm,
  userTaskListColumns,
  UserTaskListCell,
  workflowListColumns,
  WorkflowListCell,
  WorkflowPage
);
