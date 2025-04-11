package blueprint.workflowmodule.standalone.loanapproval.model;

import java.time.OffsetDateTime;

import lombok.Getter;
import lombok.Setter;

/**
 * Represents a user task within the loan approval process.
 * <p>
 * This entity stores all relevant attributes of a user task, including creation,
 * update, and completion timestamps. The {@code data} field is stored as JSON
 * and is used to persist the current task status without immediately saving it
 * to the aggregate.
 * </p>
 */
@Getter
@Setter
public class Task {

    /** Unique identifier for the user task. */
    private String taskId;

    /**
     * This field allows temporary storage of task data before it is finalized
     * and persisted to the aggregate.
     */
    private TaskData data;

    /** Timestamp when the task was created. */
    private OffsetDateTime createdAt;

    /** Timestamp when the task was last updated. */
    private OffsetDateTime updatedAt;

    /** Timestamp when the task was completed. */
    private OffsetDateTime completedAt;

    /** Name of the user who completed the task. */
    private String completedBy;

    /**
     * Retrieves the task's stored data.
     * <p>
     * This method provides convenient access to the stored task data,
     * automatically casting it to the correct type.
     * </p>
     *
     * @param <T> The type of task data expected.
     * @return The task data cast to the correct type.
     */
    @SuppressWarnings("unchecked")
    public <T extends TaskData> T getData() {
        return (T) data;
    }

}
