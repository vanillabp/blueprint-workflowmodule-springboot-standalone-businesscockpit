import { Text } from 'grommet';
import { WorkflowPage } from '@vanillabp/bc-shared';
import {lazy} from "react";
import {BpmnProcessId as SingleTask_BpmnProcessId} from "./single-task";

const Test_WorkflowPage = lazy(() => import('./single-task/WorkflowPage'));

const buildVersion = process.env.BUILD_VERSION;
const buildTimestamp = new Date(process.env.BUILD_TIMESTAMP);

const WorkflowPageComponent: WorkflowPage = ({ workflow }) =>
    workflow.bpmnProcessId === SingleTask_BpmnProcessId
        ? <Test_WorkflowPage workflow={ workflow } />
        : <Text>{ `unknown BPMN process ID '${workflow.bpmnProcessId}'` }</Text>;

export {
  buildVersion,
  buildTimestamp,
  WorkflowPageComponent as WorkflowPage
};
