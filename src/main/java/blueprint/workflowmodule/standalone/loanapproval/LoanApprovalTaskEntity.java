package blueprint.workflowmodule.standalone.loanapproval;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import java.time.LocalDateTime;

@Entity(name = "LOAN_APPROVAL_TASK_ENTITY")
@Getter
@Setter
public class LoanApprovalTaskEntity {

    @Id
    private String taskId;

    @Type(JsonType.class)
    @Column(name = "FORM_DATA", columnDefinition = "CLOB")
    private LoanApprovalTaskFormDataImpl data;

    @Column(name = "CREATED_AT")
    private LocalDateTime createdAt;

    @Column(name = "UPDATED_AT")
    private LocalDateTime updatedAt;

    @Column(name = "COMPLETED_AT")
    private LocalDateTime completedAt;

    @JsonIgnore
    @SuppressWarnings("unchecked")
    public <T extends LoanApprovalTaskFormDataImpl> T getData() {
        return (T) data;
    }
}
