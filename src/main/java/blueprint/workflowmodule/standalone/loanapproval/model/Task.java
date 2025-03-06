package blueprint.workflowmodule.standalone.loanapproval.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;
import java.time.LocalDateTime;

/**
 * Represents a user task within the loan approval process.
 * <p>
 * This entity stores all relevant attributes of a user task, including creation,
 * update, and completion timestamps. The {@code data} field is stored as JSON
 * and is used to persist the current task status without immediately saving it
 * to the aggregate.
 * </p>
 */
@Entity(name = "LOAN_APPROVAL_TASK_ENTITY")
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
    @Column(name = "DATA", columnDefinition = "CLOB")
    private TaskData data;

    /** Timestamp when the task was created. */
    @Column(name = "CREATED_AT")
    private LocalDateTime createdAt;

    /** Timestamp when the task was last updated. */
    @Column(name = "UPDATED_AT")
    private LocalDateTime updatedAt;

    /** Timestamp when the task was completed. */
    @Column(name = "COMPLETED_AT")
    private LocalDateTime completedAt;

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
    @JsonIgnore
    @SuppressWarnings("unchecked")
    public <T extends TaskData> T getData() {
        return (T) data;
    }
}
