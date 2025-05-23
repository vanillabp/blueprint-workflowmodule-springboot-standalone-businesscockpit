import { WorkflowPage } from "@vanillabp/bc-shared";
import { lazy } from "react";
import { BpmnProcessId as LoanApproval_BpmnProcessId } from "./loan-approval";

const LoanApprovalWorkflowPage = lazy(
  () => import("./loan-approval/WorkflowPage")
);

const buildVersion = process.env.BUILD_VERSION;
const buildTimestamp = new Date(process.env.BUILD_TIMESTAMP);

const WorkflowPageComponent: WorkflowPage = ({ workflow }) =>
  workflow.bpmnProcessId === LoanApproval_BpmnProcessId ? (
    <LoanApprovalWorkflowPage workflow={workflow} />
  ) : (
    <h2>{`unknown BPMN process ID '${workflow.bpmnProcessId}'`}</h2>
  );

export { buildVersion, buildTimestamp, WorkflowPageComponent as WorkflowPage };
