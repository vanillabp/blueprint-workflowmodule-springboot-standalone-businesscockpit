package blueprint.workflowmodule.standalone.loanapproval.model;

import java.time.OffsetDateTime;

import org.hibernate.annotations.Type;

import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
@Entity(name = "LOAN_APPROVAL_TASK")
@Getter
@Setter
public class Task {

    /** Unique identifier for the user task. */
    @Id
    private String taskId;

    /**
     * JSON field storing the task's current state.
     * <p>
     * This field allows temporary storage of task data before it is finalized
     * and persisted to the aggregate.
     * </p>
     */
    @Type(JsonType.class)
    @Column(columnDefinition = "CLOB")
    private TaskData data;

    /** Timestamp when the task was created. */
    @Column
    private OffsetDateTime createdAt;

    /** Timestamp when the task was last updated. */
    @Column
    private OffsetDateTime updatedAt;

    /** Timestamp when the task was completed. */
    @Column
    private OffsetDateTime completedAt;

    /** Name of the user who completed the task. */
    @Column
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
