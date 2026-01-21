import { userTaskColumns } from "../../../library/src/cells";
import { ColumnsOfUserTaskFunction } from "@vanillabp/bc-types";

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
