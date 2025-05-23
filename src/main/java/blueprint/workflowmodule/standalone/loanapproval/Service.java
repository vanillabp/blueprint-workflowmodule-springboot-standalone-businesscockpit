package blueprint.workflowmodule.standalone.loanapproval;

import java.time.OffsetDateTime;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import blueprint.workflowmodule.standalone.loanapproval.model.Aggregate;
import blueprint.workflowmodule.standalone.loanapproval.model.AggregateRepository;
import blueprint.workflowmodule.standalone.loanapproval.model.AssessRiskFormData;
import blueprint.workflowmodule.standalone.loanapproval.model.Task;
import blueprint.workflowmodule.standalone.loanapproval.user.BlueprintUserService;
import io.vanillabp.cockpit.commons.security.usercontext.UserContext;
import io.vanillabp.cockpit.commons.security.usercontext.UserDetails;
import io.vanillabp.spi.cockpit.BusinessCockpitService;
import io.vanillabp.spi.cockpit.usertask.PrefilledUserTaskDetails;
import io.vanillabp.spi.cockpit.usertask.UserTaskDetails;
import io.vanillabp.spi.cockpit.usertask.UserTaskDetailsProvider;
import io.vanillabp.spi.cockpit.workflow.PrefilledWorkflowDetails;
import io.vanillabp.spi.cockpit.workflow.WorkflowDetails;
import io.vanillabp.spi.cockpit.workflow.WorkflowDetailsProvider;
import io.vanillabp.spi.process.ProcessService;
import io.vanillabp.spi.service.BpmnProcess;
import io.vanillabp.spi.service.TaskEvent;
import io.vanillabp.spi.service.TaskId;
import io.vanillabp.spi.service.WorkflowService;
import io.vanillabp.spi.service.WorkflowTask;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

/**
 * This service manages the lifecycle of a loan approval workflow.
 * It integrates with the BPMN process using the VanillaBP & Business Cockpit SPI,
 * handling both service and user tasks.
 *
 * <p>
 * This class is annotated as a Spring Service and is linked to a BPMN
 * process with the ID <em>loan_approval</em>.
 * </p>
 *
 * @version 1.0
 * @see <a href="https://github.com/vanillabp/spi-for-java/blob/main/README.md#wire-up-a-process">VanillaBP docs &quot;Wire up a process&quot;</a>
 */
@Slf4j
@org.springframework.stereotype.Service
@WorkflowService(
        workflowAggregateClass = Aggregate.class,
        bpmnProcess = @BpmnProcess(bpmnProcessId = "loan_approval"))
@Transactional
public class Service {

    /**
     * Repository for retrieving and persisting {@link Aggregate} entities.
     */
    @Autowired
    private AggregateRepository loanApprovals;

    /**
     * A reference to the {@link ProcessService} that will start and manage the
     * workflow process for the {@link Aggregate}.
     */
    @Autowired
    private ProcessService<Aggregate> service;

    /**
     * Used to retrieve the user logged in.
     */
    @Autowired
    private UserContext userContext;

    /**
     * Used to retrieve user information.
     */
    @Autowired
    private BlueprintUserService userService;

    /**
     * A reference to the {@link BusinessCockpitService} providing
     * functionality regarding business cockpit.
     */
    @Autowired
    private BusinessCockpitService<Aggregate> businessCockpitService;

    /**
     * Starts the loan approval workflow.
     *
     * @param loanRequestId A unique identifier for the loan request.
     * @param loanAmount    the loan size.
     */
    public void initiateLoanApproval(
            final String loanRequestId,
            final int loanAmount) throws Exception {

        // build the aggregate
        // (https://github.com/vanillabp/spi-for-java/blob/main/README.md#process-specific-workflow-aggregate)
        final var loanApproval = Aggregate
                .builder()
                .loanRequestId(loanRequestId)
                .amount(loanAmount)
                .build();

        service.startWorkflow(loanApproval);

        log.info("Loan approval workflow '{}' started", loanApproval.getLoanRequestId());

    }

    /**
     * A helper class that encapsulates both an {@link Aggregate} and a corresponding {@link Task}.
     *
     * <p>
     * This class is used to conveniently store and retrieve both the loan approval
     * (workflow aggregate) and the associated task within the process.
     * </p>
     */
    @AllArgsConstructor
    private static class AggregateAndTask {

        /**
         * The loan approval aggregate associated with the task.
         */
        private Aggregate loanApproval;

        /**
         * The specific task within the loan approval workflow.
         */
        private Task task;

    }

    /**
     * Retrieves an {@link AggregateAndTask} object for the given loan request and task identifiers.
     *
     * <p>
     * This method looks up the loan approval aggregate and the corresponding task.
     * If either the loan approval or the task does not exist, it returns {@code null}.
     * </p>
     *
     * @param loanRequestId The unique identifier of the loan request.
     * @param taskId        The unique identifier of the task.
     * @return An {@link AggregateAndTask} containing the loan approval and task if found,
     * otherwise {@code null}.
     */
    private AggregateAndTask determineTask(
            final String loanRequestId,
            final String taskId) {

        final var loanApprovalFound = loanApprovals.findById(loanRequestId);
        if (loanApprovalFound.isEmpty()) {
            return null;
        }

        final var loanApproval = loanApprovalFound.get();

        final var task = loanApproval.getTask(taskId);
        if (task == null) {
            return null;
        }

        return new AggregateAndTask(loanApproval, task);

    }

    /**
     * This method is called by VanillaBP once the user task, identified by the method's name, is created
     *
     * @param loanApproval The workflow's aggregate.
     * @param taskId       Unique identifier for the user task.
     * @see <a href="https://github.com/vanillabp/spi-for-java/blob/main/README.md#wire-up-a-task">VanillaBP docs &quot;Wire up a task&quot;</a>
     * @see <a href="https://github.com/vanillabp/spi-for-java/blob/main/README.md#user-tasks-and-asynchronous-tasks>VanillaBP docs &quot;UserRepresentation tasks and asynchronous tasks&quot;</a>
     */
    @WorkflowTask
    public void assessRisk(
            final Aggregate loanApproval,
            @TaskId final String taskId,
            @TaskEvent final TaskEvent.Event taskEvent) {

        // task is created
        if (taskEvent == TaskEvent.Event.CREATED) {

            final var formData = new AssessRiskFormData();

            final var task = new Task();
            task.setTaskId(taskId);
            task.setCreatedAt(OffsetDateTime.now());
            task.setData(formData);
            loanApproval.getTasks().put(taskId, task);

            log.info("Assessing risk for loan approval '{}' (user task ID = '{}')",
                    loanApproval.getLoanRequestId(),
                    taskId);

        }
        // task is canceled e.g. due to an interrupting boundary event
        else if (taskEvent == TaskEvent.Event.CANCELED) {

            final var task = loanApproval.getTask(taskId);

            task.setCompletedAt(OffsetDateTime.now());

            // Although task it completed we won't set property 'completedBy'.
            // This is because completion is triggered by the workflow (e.g. due to
            // a boundary event) and not by a person.

        }

    }

    /**
     * /**
     * This method is called by VanillaBP once the service task, identified by the method's name, is created.
     *
     * @param loanApproval The workflow's aggregate.
     * @see <a href="https://github.com/vanillabp/spi-for-java/blob/main/README.md#wire-up-a-task">VanillaBP docs &quot;Wire up a task&quot;</a>
     */
    @WorkflowTask
    public void transferMoney(
            final Aggregate loanApproval) {

        log.info("Transferring money for loan request '{}'", loanApproval.getLoanRequestId());

        // Not part of this demo

    }

    /**
     * Completes a risk assessment task based on the given decision.
     *
     * @param loanRequestId    The identifier for a single loan approval.
     * @param taskId           The unique identifier of the user task.
     * @param riskIsAcceptable Whether the risk acceptable.
     */
    public boolean completeAssessRiskForm(
            final String loanRequestId,
            final String taskId,
            final boolean riskIsAcceptable) {

        final var aggregateAndTask = determineTask(loanRequestId, taskId);
        if (aggregateAndTask == null) {
            return false;
        }
        if (aggregateAndTask.task.getCompletedAt() != null) {
            return false;
        }

        updateAssessRiskForm(
                aggregateAndTask,
                riskIsAcceptable);

        // Mark task as completed by setting the current timestamp
        aggregateAndTask.task.setCompletedAt(OffsetDateTime.now());
        aggregateAndTask.task.setCompletedBy(userContext.getUserLoggedIn());

        // Save confirmed data in aggregate
        aggregateAndTask.loanApproval.setRiskAcceptable(riskIsAcceptable);

        // Complete user task
        service.completeUserTask(aggregateAndTask.loanApproval, taskId);

        return true;

    }

    /**
     * Saves the progress of a specific task within the loan approval workflow.
     * <p>
     * This method allows saving intermediate data for a task before it is completed.
     * It updates the loan approval entity with user input and risk assessment information
     * if provided.
     * </p>
     *
     * @param loanRequestId  The unique identifier of the loan request
     * @param taskId         The unique identifier of the task being saved
     * @param riskIsAcceptable boolean indicating risk assessment decision
     * @return {@code true} if the task was successfully saved;
     * {@code false} if the loan request was not found, required data was missing,
     * or if the task ID doesn't match the current risk assessment task
     */
    public boolean saveAssessRiskForm(
            final String loanRequestId,
            final String taskId,
            final Boolean riskIsAcceptable) {

        final var aggregateAndTask = determineTask(loanRequestId, taskId);
        if (aggregateAndTask == null) {
            return false;
        }
        if (aggregateAndTask.task.getCompletedAt() != null) {
            return false;
        }

        updateAssessRiskForm(
                aggregateAndTask,
                riskIsAcceptable);

        loanApprovals.save(aggregateAndTask.loanApproval);

        log.info("Task saved: {}", taskId);

        return true;

    }

    /**
     * Used to update form data saved for a user task. It is updated on intermediate saves
     * as well as after completing the task to reflect the form values on completion.
     *
     * @param aggregateAndTask Aggregate and task to be updated
     * @param riskAcceptable Value to be updated
     */
    private void updateAssessRiskForm(
            final AggregateAndTask aggregateAndTask,
            final Boolean riskAcceptable) {

        final AssessRiskFormData formData = aggregateAndTask.task.getData();

        // Save the risk assessment into the task's form data for showing the completed task
        formData.setRiskAcceptable(riskAcceptable);

        // Update task meta-data
        aggregateAndTask.task.setUpdatedAt(OffsetDateTime.now());

    }

    /**
     * Represents a form used for assessing risk in this loan approval process.
     * This class extends {@link AssessRiskFormData} and includes additional details
     * like the loan amount.
     */
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class AssessRiskForm extends AssessRiskFormData {

        /**
         * The loan amount associated with this risk assessment.
         */
        private int amount;

        /**
         * The person completed the form or null if not completed
         */
        private String completedBy;

    }

    /**
     * Retrieves the details of an assess risk task for a given loan request.
     *
     * <p>
     * This method searches for the associated workflow aggregate and task,
     * and if found, extracts the necessary details to fill {@link AssessRiskForm}.
     * </p>
     *
     * @param loanRequestId The unique identifier of the loan request.
     * @param taskId        The unique identifier of the task being assessed.
     * @return An {@link AssessRiskForm} containing task-related data, or {@code null} if not found.
     */
    public AssessRiskForm getAssessRisk(
            final String loanRequestId,
            final String taskId) {

        final var aggregateAndTask = determineTask(loanRequestId, taskId);
        if (aggregateAndTask == null) {
            return null;
        }

        final AssessRiskFormData formData = aggregateAndTask.task.getData();

        AssessRiskForm assessRiskForm = new AssessRiskForm();
        assessRiskForm.setAmount(aggregateAndTask.loanApproval.getAmount());
        assessRiskForm.setRiskAcceptable(formData.getRiskAcceptable());
        assessRiskForm.setCompletedBy(aggregateAndTask.task.getCompletedBy());

        return assessRiskForm;

    }

    /**
     * Represents a loan approval case information of this loan approval process.
     */
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class LoanApprovalCaseInformation {

        /**
         * The loan amount associated with this risk assessment.
         */
        private int amount;

        /**
         * The person completed the form or null if not completed
         */
        private String completedBy;

        /**
         * Case result
         */
        private Boolean riskAcceptable;

    }

    /**
     * Retrieves the details of a loan approval request.
     *
     * <p>
     * This method searches for the associated workflow aggregate,
     * and if found, extracts the necessary details to fill {@link LoanApprovalCaseInformation}.
     * </p>
     *
     * @param loanRequestId The unique identifier of the loan request.
     * @return An {@link LoanApprovalCaseInformation} containing case-related data, or {@code null} if not found.
     */
    public LoanApprovalCaseInformation getCaseInformation(
            final String loanRequestId) {

        final var loanApprovalFound = loanApprovals.findById(loanRequestId);
        if (loanApprovalFound.isEmpty()) {
            return null;
        }

        final var loanApproval = loanApprovalFound.get();

        // map user-id stored to display name
        final var completedBy = loanApproval
                .getTasks()
                .values()
                .stream()
                .findFirst()
                .map(Task::getCompletedBy)
                .map(userId -> userService.getUser(userId))
                .map(UserDetails::getDisplay)
                .orElse(null);

        return new LoanApprovalCaseInformation(
                loanApproval.getAmount(), completedBy, loanApproval.getRiskAcceptable());

    }

    /**
     * Method that reports business data (details) for a user task to be shown in the list of user tasks in
     * e.g. the VanillaBP Business Cockpit
     *
     * @param userTaskDetails The details object prefilled with defaults
     * @param aggregate The aggregate instance that contains the workflow where the task is located.
     * @return returns the details provided through {@code PrefilledUserTaskDetails}
     */
    @UserTaskDetailsProvider(taskDefinition = "assessRisk")
    public UserTaskDetails assessRiskDetails(
            final PrefilledUserTaskDetails userTaskDetails,
            final Aggregate aggregate) {

        log.info("assessRiskDetails for '{}' started", aggregate.getLoanRequestId());

        // see https://github.com/vanillabp/business-cockpit/tree/main/spi-for-java
        userTaskDetails.setDetails(
                Map.of("loanRequestId", aggregate.getLoanRequestId()));
        userTaskDetails.setCandidateGroups(List.of("RISK_ASSESSMENT"));

        return userTaskDetails;

    }

    /**
     * Method that reports business data (details) for the current running workflow to be shown in the list of running workflows
     * e.g., the VanillaBP Business Cockpit.
     *
     * @param workflowDetails The details object prefilled with defaults
     * @param aggregate The aggregate instance that contains the workflow where the task is located.
     * @return returns the details provided through {@code PrefilledWorkflowDetails}
     */
    @WorkflowDetailsProvider
    public WorkflowDetails workflowDetails(
            final PrefilledWorkflowDetails workflowDetails,
            final Aggregate aggregate) {

        log.info("WorkflowDetails '{}' started", aggregate.getLoanRequestId());

        // see https://github.com/vanillabp/business-cockpit/tree/main/spi-for-java
        workflowDetails.setDetails(
                Map.of("loanRequestId", aggregate.getLoanRequestId()));
        workflowDetails.setAccessibleToGroups(List.of("RISK_ASSESSMENT", "ADMIN"));

        return workflowDetails;

    }

}
