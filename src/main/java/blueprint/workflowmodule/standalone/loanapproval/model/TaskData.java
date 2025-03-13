package blueprint.workflowmodule.standalone.loanapproval.model;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

/**
 * Interface for task-related data in the loan approval process.
 * <p>
 * This interface is used for polymorphic JSON serialization and deserialization of task-specific data.
 * The {@code taskType} property determines the actual subclass being used.
 * </p>
 *
 * <p>Currently supported subtypes:</p>
 * <ul>
 *     <li>{@link AssessRiskFormData} - Represents form data for assessing risk.</li>
 * </ul>
 */
@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, property = "taskType")
@JsonSubTypes({
        @JsonSubTypes.Type(value = AssessRiskFormData.class)
})
public interface TaskData {
}
