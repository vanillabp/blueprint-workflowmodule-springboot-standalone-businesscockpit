import {ColumnsOfWorkflowFunction} from "@vanillabp/bc-shared";
import {workflowColumns} from "../../../library/src/cells";
import {getEnvVar} from "./utils";

const buildVersion = getEnvVar('BUILD_VERSION', '0.0.0');
const buildTimestamp = getEnvVar('BUILD_TIMESTAMP', new Date());

const columns: ColumnsOfWorkflowFunction = () => [
    workflowColumns['id'],
    workflowColumns['title'],
    workflowColumns['caseId'],
    workflowColumns['status'],
    workflowColumns['customerNumber'],
    workflowColumns['caseCreator'],
    {
        ...workflowColumns['reportingDate'],
        type: 'date'
    },
    {
        ...workflowColumns['createdAt'],
        type: 'date-time'
    }, {
        ...workflowColumns['deadline'],
        type: 'date'
    },
];

export {
    buildVersion,
    buildTimestamp,
    columns,
}
