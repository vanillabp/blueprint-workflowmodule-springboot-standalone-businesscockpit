package blueprint.workflowmodule.standalone.loanapproval;

import io.vanillabp.spi.cockpit.usertask.PrefilledUserTaskDetails;
import io.vanillabp.spi.cockpit.usertask.UserTaskDetails;
import io.vanillabp.spi.cockpit.usertask.UserTaskDetailsProvider;
import io.vanillabp.spi.cockpit.workflow.PrefilledWorkflowDetails;
import io.vanillabp.spi.cockpit.workflow.WorkflowDetails;
import io.vanillabp.spi.cockpit.workflow.WorkflowDetailsProvider;
import io.vanillabp.spi.process.ProcessService;
import io.vanillabp.spi.service.BpmnProcess;
import io.vanillabp.spi.service.TaskId;
import io.vanillabp.spi.service.WorkflowService;
import io.vanillabp.spi.service.WorkflowTask;
import jakarta.transaction.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

/**
 * Service is a simple demonstration of how to integrate a BPMN
 * process with the VanillaBP SPI and the Business-Cockpit SPI. It manages the lifecycle of a standalone
 * workflow, starting and updating the process and also executing service and user tasks.
 *
 * <p>
 * An instance of this class is created as a Spring Service and is annotated
 * with {@code @WorkflowService}, linking it to a BPMN process with the ID
 * <em>demo</em>.
 * </p>
 *
 * @version 1.0
 */

@org.springframework.stereotype.Service
@WorkflowService(
    workflowAggregateClass = Aggregate.class,
    bpmnProcess = @BpmnProcess(bpmnProcessId = "loanapproval")
)
@Transactional
public class Service {

    /**
     * Logger for this class, used to log workflow events and status messages.
     */
    private static final Logger log = LoggerFactory.getLogger(Service.class);

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
     * Starts the workflow process for a given ID. This method creates a new
     * {@link Aggregate} with the provided ID and a boolean flag
     * indicating whether a user task is desired. It then delegates to the
     * {@code standaloneService} to start the BPMN process.
     *
     * @param loanRequestId A unique identifier for this workflow instance.
     * @throws Exception If the workflow cannot be started for any reason.
     */
    public void initiateLoanApproval(
        final String loanRequestId,
        final int loanAmount) throws Exception {

        // build the aggregate
        // (https://github.com/vanillabp/spi-for-java/blob/main/README.md#process-specific-workflow-aggregate)

        final var loanApproval = new Aggregate();

        loanApproval.setLoanRequestId(loanRequestId);
        loanApproval.setAmount(loanAmount);

        service.startWorkflow(loanApproval);

        log.info("Loan approval workflow '{}' started", loanApproval.getLoanRequestId());
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

        // not part of this demo
    }

    /**
     * This method is called by VanillaBP once the user task, identified by the method's name, is created
     *
     * @param loanApproval The workflow's aggregate.
     * @param taskId       Unique identifier for the user task.
     * @see <a href="https://github.com/vanillabp/spi-for-java/blob/main/README.md#wire-up-a-task">VanillaBP docs &quot;Wire up a task&quot;</a>
     * @see <a href="https://github.com/vanillabp/spi-for-java/blob/main/README.md#user-tasks-and-asynchronous-tasks>VanillaBP docs &quot;User tasks and asynchronous tasks&quot;</a>
     */
    @WorkflowTask
    public void assessRisk(
        final Aggregate loanApproval,
        @TaskId final String taskId) {

        // TODO: TASK EVENTS + loanApproval.getTasks().put




        LoanApprovalTaskEntity task = new LoanApprovalTaskEntity();
        task.setTaskId(taskId);
        task.setCreatedAt(LocalDateTime.now());
        loanApproval.getTasks().put(taskId, task);

        log.info("Assessing risk for loan approval '{}' (user task ID = '{}')", loanApproval.getLoanRequestId(), taskId);

    }

    /**
     * Completes a risk assessment task based on the given decision.
     *
     * @param loanRequestId    The identifier for a single loan approval.
     * @param taskId           The unique identifier of the user task.
     * @param riskIsAcceptable Whether the risk acceptable.
     */
    public boolean completeRiskAssessment(
        final String loanRequestId,
        final String taskId,
        final boolean riskIsAcceptable,
        final int amount) {

        // TODO Falls

        final var loanApprovalFound = loanApprovals.findById(loanRequestId);

        // validation
        if (loanApprovalFound.isEmpty()) {
            return false;
        }

        final var loanApproval = loanApprovalFound.get();
        if ((loanApproval.getAssessRiskTaskId() == null) || !taskId.equals(loanApproval.getAssessRiskTaskId())) {
            return false;
        }
        log.info("Got risk assessment '{}' for loan approval '{}'", riskIsAcceptable ? "accepted" : "denied", loanRequestId);

        // save confirmed data in aggregate
        loanApproval.setRiskAcceptable(riskIsAcceptable);
        loanApproval.setAmount(amount);

        // complete user task
        service.completeUserTask(loanApproval, taskId);

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
     * @param loanRequestId The unique identifier of the loan request
     * @param taskId        The unique identifier of the task being saved
     * @param requestBody   A map containing task data with keys:
     *                      - "riskIsAcceptable": Optional boolean indicating risk assessment decision
     * @return {@code true} if the task was successfully saved;
     * {@code false} if the loan request was not found, required data was missing,
     * or if the task ID doesn't match the current risk assessment task
     */
    public boolean saveTask(
        final String loanRequestId,
        final String taskId,
        final Map<String, Object> requestBody) {

        final var loanApprovalFound = loanApprovals.findById(loanRequestId);

        // validation
        if (loanApprovalFound.isEmpty()) {
            return false;
        }

        final var loanApproval = loanApprovalFound.get();

        // Handle risk assessment data if provided
        if (requestBody.containsKey("riskIsAcceptable") && requestBody.get("riskIsAcceptable") != null) {
            final var riskIsAcceptable = (Boolean) requestBody.get("riskIsAcceptable");
            loanApproval.setRiskAcceptable(riskIsAcceptable);
        }

        if ((loanApproval.getAssessRiskTaskId() == null) || !taskId.equals(loanApproval.getAssessRiskTaskId())) {
            return false;
        }

        LoanApprovalTaskEntity task = loanApproval.getTasks().get(taskId);
        if (task == null) {
            task = new LoanApprovalTaskEntity();
            task.setTaskId(taskId);
            task.setCreatedAt(LocalDateTime.now());
            loanApproval.getTasks().put(taskId, task);
        }



        // TODO ZWISCHENSPEICHERN NEUE TABLES

        loanApprovals.save(loanApproval);

        log.info("Task saved: {}", taskId);

        return true;
    }

    public Map<String, Object> getLoanApproval(
        final String loanRequestId) {

        final var loanApprovalFound = loanApprovals.findById(loanRequestId);

        if (loanApprovalFound.isEmpty()) {
            return null;
        }

        final var loanApproval = loanApprovalFound.get();

        // Construct response map
        Map<String, Object> response = new HashMap<>();
        response.put("amount", loanApproval.getAmount());
        response.put("riskAcceptable", loanApproval.getRiskAcceptable());

        return response;
    }


    /**
     * Method that reports business data (details) for a user task to be shown in the list of user tasks in
     * e.g. the Vanillabp Business Cockpit
     *
     * @param details   prefilled details object
     * @param aggregate The aggregate instance that contains the workflow where the task is located.
     * @return returns the details provided through {@code PrefilledUserTaskDetails}
     */
    @UserTaskDetailsProvider(taskDefinition = "assessRisk")
    public UserTaskDetails assessRiskDetails(
        final PrefilledUserTaskDetails details,
        final Aggregate aggregate) {

        log.info("assessRiskDetails for '{}' started", aggregate.getLoanRequestId());

        details.setTitle(Map.of("Title", aggregate.getLoanRequestId()));
        details.setAssignee("Max Mustermann");

        return details;
    }

    /**
     * Method that reports business data (details) for the current running workflow to be shown in the list of running workflows
     * e.g., the Vanillabp Business Cockpit.
     *
     * @param details   prefilled details object
     * @param aggregate The aggregate instance that contains the workflow where the task is located.
     * @return returns the details provided through {@code PrefilledWorkflowDetails}
     */
    @WorkflowDetailsProvider
    public WorkflowDetails workflowDetails(
        final PrefilledWorkflowDetails details,
        final Aggregate aggregate) {

        log.info("WorkflowDetails '{}' started", aggregate.getLoanRequestId());

        details.setTitle(Map.of("Title", aggregate.getLoanRequestId()));

        return details;
    }

}
