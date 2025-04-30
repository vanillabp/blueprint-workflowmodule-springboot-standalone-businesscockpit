import {userTaskColumns} from "../../../library/src/cells";
import {ColumnsOfUserTaskFunction} from "@vanillabp/bc-shared";
import {getEnvVar} from "./utils";

// @ts-ignore
const buildVersion = process.env.BUILD_VERSION;
// @ts-ignore
const buildTimestamp = process.env.BUILD_TIMESTAMP;

const columns: ColumnsOfUserTaskFunction = () => [
    userTaskColumns['id'],
    userTaskColumns['title'],
    userTaskColumns['workflowTitle'],
    userTaskColumns['caseId'],
    userTaskColumns['status'],
    userTaskColumns['customerNumber'],
    {
        ...userTaskColumns['deadline'],
        type: 'date'
    },
    userTaskColumns['caseCreator'],
    {
        ...userTaskColumns['reportingDate'],
        type: 'date'
    },
    {
        ...userTaskColumns['createdAt'],
        type: 'date-time'
    },
];

export {
    buildVersion,
    buildTimestamp,
    columns,
}
