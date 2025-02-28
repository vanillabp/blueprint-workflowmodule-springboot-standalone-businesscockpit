import { Text } from 'grommet';
import { lazy } from 'react';
import { BpmnProcessId as LoanApproval } from './loan-approval';
import { UserTaskForm } from '@vanillabp/bc-shared';

/**
 * Using lazy() for dynamic imports to enable code-splitting.
 * This reduces initial load time and loads components only when needed.
 *
 */
const SingleTaskUserTaskForm = lazy(() => import('./loan-approval/UserTaskForm'));

const buildVersion = process.env.BUILD_VERSION;
const buildTimestamp = new Date(process.env.BUILD_TIMESTAMP);

/**
 * UserTaskFormComponent is responsible for delegating user task forms based on BPMN process IDs.
 *
 * ## Routing Structure:
 * - Instead of checking multiple use cases inline, we delegate to individual task form components.
 * - Each task form is dynamically imported, enabling modularity and reducing initial load time.
 * - This structure keeps each task definition isolated, making maintenance and extension easier.
 *
 * ## Delegation:
 * - If the `bpmnProcessId` matches a known process, it renders the respective task form component.
 * - If the process ID is unknown, it displays an error message instead of crashing.
 *
 * ## Why This Approach?
 * - **Encapsulation**: Each use case is managed separately, avoiding dependencies between them.
 * - **Maintainability**: If extending `usecase1`, no need to modify or be concerned with `usecase2`.
 * - **Scalability**: New use cases can be added without affecting existing ones.
 *
 * @param {Object} userTask - The user task data containing the BPMN process ID and task definition.
 * @returns {JSX.Element} The corresponding user task form or an error message if not found.
 */
const UserTaskFormComponent: UserTaskForm = ({ userTask }) =>
    userTask.bpmnProcessId === LoanApproval
        ? <SingleTaskUserTaskForm userTask={ userTask } />
        : <Text>{ `unknown BPMN process ID '${userTask.bpmnProcessId}'` }</Text>;

export {
  buildVersion,
  buildTimestamp,
  UserTaskFormComponent as UserTaskForm
};
