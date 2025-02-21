import { Text } from 'grommet';
import { WorkflowPage } from '@vanillabp/bc-shared';

// const Test_WorkflowPage = lazy(() => import('./Test/WorkflowPage'));

const buildVersion = process.env.BUILD_VERSION;
const buildTimestamp = new Date(process.env.BUILD_TIMESTAMP);

const WorkflowPageComponent: WorkflowPage = ({ workflow }) =>
    /* workflow.bpmnProcessId === Test_bpmnProcessId
        ? <Test_WorkflowPage workflow={ workflow } />
        :*/ <Text>{ `unknown BPMN process ID '${workflow.bpmnProcessId}'` }</Text>;

export {
  buildVersion,
  buildTimestamp,
  WorkflowPageComponent as WorkflowPage
};
