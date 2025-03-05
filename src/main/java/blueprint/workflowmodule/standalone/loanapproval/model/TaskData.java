package blueprint.workflowmodule.standalone.loanapproval.model;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "taskType")
@JsonSubTypes({
    @JsonSubTypes.Type(value = AssessRiskFormData.class)
})
public interface TaskData {

}
