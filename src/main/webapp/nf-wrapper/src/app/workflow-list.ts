import { ColumnsOfWorkflowFunction } from "@vanillabp/bc-shared";
import { workflowColumns } from "../../../library/src/loan-approval/cells";
import { getEnvVar } from "./utils";

const buildVersion = getEnvVar('BUILD_VERSION', '0.0.0');
const buildTimestamp = getEnvVar('BUILD_TIMESTAMP', new Date());

const columns: ColumnsOfWorkflowFunction = () => [
    workflowColumns['loanRequestId'],
];

export {
    buildVersion,
    buildTimestamp,
    columns,
}
