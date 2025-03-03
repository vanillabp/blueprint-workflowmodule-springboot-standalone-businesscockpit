package blueprint.workflowmodule.standalone.loanapproval;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "userTaskType")
@JsonSubTypes({
    @JsonSubTypes.Type(value = Aggregate.class)
})
public interface LoanApprovalTaskFormData {
}
