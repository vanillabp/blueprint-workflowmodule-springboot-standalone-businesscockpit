package blueprint.workflowmodule.standalone.usecase;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.NoSuchElementException;

/**
 * A simple REST controller that provides different endpoints.
 * It demonstrates how to accept parameters for creating a new workflow instance and delegate to the {@link UseCaseService}.
 *
 * <p>
 * This controller uses Spring’s {@code @RestController} annotation to
 * expose a REST API, and {@code @GetMapping} to handle GET requests.
 * </p>
 *
 * @version 1.0
 */
@RestController
public class ApiController {

    /**
     * Service that orchestrates the BPMN process for standalone workflows.
     */
    @Autowired
    private UseCaseService service;

    /**
     * Repository for retrieving and persisting {@link Aggregate} entities.
     */
    @Autowired
    private AggregateRepository aggregateRepo;

    /**
     * Starts a new workflow instance based on the provided parameters.
     * It delegates the call to {@link UseCaseService#initiateUseCase(String, boolean)}
     * to actually begin the BPMN process. If the {@code wantUserTask} is false then the
     * workflow automatically ends. (see Operate endpoint for process instances)
     *
     * @param id           A unique identifier for the workflow instance.
     * @param wantUserTask A boolean flag indicating whether the workflow
     *                     should include a user task. Defaults to {@code false}.
     * @return A {@code ResponseEntity} containing a simple greeting message
     * upon successful start of the workflow.
     * @throws Exception If there is any error encountered while starting
     *                   the workflow process.
     */
    @GetMapping("/{id}/start")
    public ResponseEntity<String> startWorkflow(
        @PathVariable final String id,
        @RequestParam(
            value = "wantUserTask",
            required = false,
            defaultValue = "false") final boolean wantUserTask) throws Exception {

        service.initiateUseCase(id, wantUserTask);

        return ResponseEntity.ok("Workflow started with UserTask being " + wantUserTask);
    }

    /**
     * Completes a specific user task within a workflow for the given aggregate ID.
     * <p>
     * This endpoint allows completing a task within a workflow by providing both
     * the aggregate ID and the task ID. The method retrieves the corresponding
     * aggregate and marks the specified task as completed.
     * </p>
     *
     * @param id     The unique identifier of the aggregate associated with the workflow.
     * @param taskId The unique identifier of the user task to be completed.
     * @return A ResponseEntity containing a success message upon task completion.
     * @throws NoSuchElementException if no aggregate with the given ID is found.
     */
    @GetMapping("/{id}/{taskId}/complete")
    public ResponseEntity<String> completeWorkflow(
        @PathVariable final String id,
        @PathVariable final String taskId) {

        final var aggregate = aggregateRepo.findById(id).orElseThrow();

        service.completeUserTask(aggregate, taskId);

        return ResponseEntity.ok("Completed Workflow: " + id);
    }

    /**
     * Returns a welcome message for the user.
     * <p>
     * This endpoint provides a simple greeting to the user, guiding them
     * to explore other available REST endpoints for interacting with the
     * workflow system.
     * </p>
     *
     * @return A {@code ResponseEntity} containing a welcome message.
     */
    @GetMapping("/home")
    public ResponseEntity<String> home() {
        final var text = "Welcome to the standalone workflow blueprint. To continue lookup the other REST-Endpoints.";

        return ResponseEntity.ok(text);
    }
}
