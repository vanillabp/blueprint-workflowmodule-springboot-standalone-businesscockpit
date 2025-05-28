import { userTaskColumns } from "../../../library/src/loan-approval/cells";
import { ColumnsOfUserTaskFunction } from "@vanillabp/bc-shared";

// @ts-ignore
const buildVersion = process.env.BUILD_VERSION;
// @ts-ignore
const buildTimestamp = process.env.BUILD_TIMESTAMP;

const columns: ColumnsOfUserTaskFunction = () => [
    userTaskColumns['loanRequestId'],
];

export {
    buildVersion,
    buildTimestamp,
    columns,
}
