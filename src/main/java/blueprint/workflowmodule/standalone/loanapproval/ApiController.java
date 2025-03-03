package blueprint.workflowmodule.standalone.loanapproval;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.NoSuchElementException;
import java.util.UUID;

/**
 * A simple REST controller that provides different endpoints.
 * It demonstrates how to accept parameters for creating a new workflow instance and delegate to the {@link Service}.
 *
 * <p>
 * This controller uses Spring’s {@code @RestController} annotation to
 * expose a REST API, and {@code @GetMapping} to handle GET requests.
 * </p>
 *
 * @version 1.0
 */
@RestController
@RequestMapping("/api/loan-approval")
public class ApiController {

    /**
     * Logger for this class, used to log workflow events and status messages.
     */
    private static final Logger log = LoggerFactory.getLogger(ApiController.class);

    /**
     * The loan approval service providing business functionality to
     * be triggered based on incoming REST calls.
     */
    @Autowired
    private Service service;

    /**
     * Initiate processing of a new loan approval.
     *
     * @param loanAmount The loan size.
     * @return The ID of loan request. Typically, the ID is given by the calling system, but for demo
     * purposes it is generated and returned by this endpoint.
     */
    @GetMapping("/request-loan-approval")
    public ResponseEntity<String> requestLoanApproval(
        @RequestParam final int loanAmount) throws Exception {

        final var loanRequestId = UUID.randomUUID().toString();

        service.initiateLoanApproval(
            loanRequestId,
            loanAmount);

        return ResponseEntity.ok(loanRequestId);
    }

    /**
     * Completes a specific user task within a workflow for the given aggregate ID.
     * <p>
     * This endpoint allows completing a task within a workflow by providing both
     * the aggregate ID and the task ID. The method retrieves the corresponding
     * aggregate and marks the specified task as completed.
     * </p>
     *
     * @param loanRequestId             The unique identifier of the aggregate associated with the workflow.
     * @param taskId                    The unique identifier of the user task to be completed.
     * @return                          A ResponseEntity containing a success message upon task completion.
     * @throws NoSuchElementException   if no aggregate with the given ID is found.
     */

    @PostMapping("/{loanRequestId}/assess-risk/{taskId}")
    public ResponseEntity<String> assessRisk(
        @PathVariable final String loanRequestId,
        @PathVariable final String taskId,
        @RequestParam(required = false) final boolean riskIsAcceptable,
        @RequestParam(required = false) final int amount) throws Exception {

        final var taskCompleted = service.completeRiskAssessment(
            loanRequestId,
            taskId,
            riskIsAcceptable,
            amount
        );

        log.info("Risk assessment completed");

        return ResponseEntity.ok().build();
    }

    /**
     * Saves the user task temporarily.
     *
     * @param loanRequestId     The unique identifier of the aggregate associated with the workflow.
     * @param taskId            The unique identifier of the user task.
     * @param requestBody       The request body containing task data including user input and risk assessment.
     * @return                  A ResponseEntity confirming the save operation.
     */
    @PutMapping("{loanRequestId}/save-task/{taskId}")
    public ResponseEntity<String> saveTask(
        @PathVariable final String loanRequestId,
        @PathVariable final String taskId,
        @RequestBody final Map<String, Object> requestBody) {

        final var taskSaved = service.saveTask(
            loanRequestId,
            taskId,
            requestBody);

        log.info("Saved task: {} ", taskId);

        return ResponseEntity.ok().build();
    }

    /**
     *
     *
     * @param loanRequestId
     * @return
     */
    @GetMapping("/{loanRequestId}")
    public ResponseEntity<Map<String, Object>> getLoanApproval(
        @PathVariable final String loanRequestId) {

        final Map<String, Object> loanApprovalData = service.getLoanApproval(loanRequestId);

        if (loanApprovalData == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(loanApprovalData);
    }

}
