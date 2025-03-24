package blueprint.workflowmodule.standalone.loanapproval;

import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import blueprint.workflowmodule.standalone.loanapproval.config.LoanApprovalProperties;
import lombok.extern.slf4j.Slf4j;

/**
 * <p>
 * A simple REST controller which demonstrates how to accept parameters
 * for initiating and processing a loan approval.
 * </p>
 * <p>
 * This controller uses Spring’s {@code @RestController} annotation to
 * expose a REST API, and to handle various requests.
 * </p>
 *
 * @version 1.0
 */
@Slf4j
@RestController
@RequestMapping("/api/loan-approval")
public class ApiController {

    /**
     * The loan approval service providing business functionality to
     * be triggered based on incoming REST calls.
     */
    @Autowired
    private Service service;

    @Autowired
    private LoanApprovalProperties properties;

    /**
     * Initiate processing of a new loan approval.
     *
     * @param loanAmount The loan size.
     * @return The ID of loan request. Typically, the ID is given by the calling system but for demo
     * purposes it is generated and returned by this endpoint.
     */
    @GetMapping("/request-loan-approval")
    public ResponseEntity<String> requestLoanApproval(
            @RequestParam final int loanAmount) throws Exception {

        final var loanRequestId = UUID.randomUUID().toString();

        if (loanAmount > properties.getMaxAmount()) {
            return ResponseEntity.badRequest().build();
        }

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
     * @param loanRequestId  The unique identifier of the aggregate associated with the workflow.
     * @param taskId         The unique identifier of the user task to be completed.
     * @param riskIsAcceptable Boolean indicating whether the risk is accepted.
     * @return A ResponseEntity containing a success message upon task completion.
     * @throws NoSuchElementException if no aggregate with the given ID is found.
     */

    @PostMapping("/{loanRequestId}/forms/{taskId}/assess-risk")
    public ResponseEntity<String> completeAssessRiskForm(
            @PathVariable final String loanRequestId,
            @PathVariable final String taskId,
            @RequestBody final Map<String, Object> requestBody) {

        boolean riskAcceptable = false;
        if (requestBody.containsKey("riskIsAcceptable") && requestBody.get("riskIsAcceptable") != null) {
            riskAcceptable = (Boolean) requestBody.get("riskIsAcceptable");
        }

        final var taskCompleted = service.completeAssessRiskForm(
                loanRequestId,
                taskId,
                riskAcceptable
        );
        if (!taskCompleted) {
            return ResponseEntity.notFound().build();
        }

        log.info("Risk assessment completed");

        return ResponseEntity.ok().build();
    }

    /**
     * Saves the user task temporarily.
     *
     * @param loanRequestId The unique identifier of the aggregate associated with the workflow.
     * @param taskId        The unique identifier of the user task.
     * @param requestBody   The request body containing task data including user input and risk assessment.
     * @return A ResponseEntity confirming the save operation.
     */
    @PutMapping("{loanRequestId}/forms/{taskId}/assess-risk")
    public ResponseEntity<String> saveAssessRiskForm(
            @PathVariable final String loanRequestId,
            @PathVariable final String taskId,
            @RequestBody final Map<String, Object> requestBody) {

        boolean riskAcceptable = false;
        if (requestBody.containsKey("riskIsAcceptable") && requestBody.get("riskIsAcceptable") != null) {
            riskAcceptable = (Boolean) requestBody.get("riskIsAcceptable");
        }

        final var taskSaved = service.saveAssessRiskForm(
                loanRequestId,
                taskId,
                riskAcceptable);
        if (!taskSaved) {
            return ResponseEntity.notFound().build();
        }

        log.info("Saved task: {} ", taskId);

        return ResponseEntity.ok().build();
    }

    /**
     * Returns data for risk assessment.
     *
     * @param loanRequestId Unique Identifier for each LoanRequest (workflow).
     * @param taskId        Unique Identifier for the user task.
     * @return Map containing the amount and risk assessment data.
     */
    @GetMapping("/{loanRequestId}/forms/{taskId}/assess-risk")
    public ResponseEntity<Map<String, Object>> getAssessRisk(
            @PathVariable final String loanRequestId,
            @PathVariable final String taskId) {

        final Service.AssessRiskForm assessRiskForm = service.getAssessRisk(
                loanRequestId,
                taskId);

        if (assessRiskForm == null) {
            return ResponseEntity.notFound().build();
        }

        // Convert UserTaskForm to Map
        Map<String, Object> response = new HashMap<>();
        response.put("amount", assessRiskForm.getAmount());
        response.put("riskAcceptable", assessRiskForm.getRiskAcceptable());

        log.info("Fetched task: {} with data: {}", taskId, response);
        return ResponseEntity.ok(response);
    }

}
