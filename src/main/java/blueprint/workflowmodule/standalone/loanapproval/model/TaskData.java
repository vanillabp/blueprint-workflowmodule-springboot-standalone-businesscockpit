package blueprint.workflowmodule.standalone.loanapproval.model;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

/**
 * Interface for task-related data in the loan approval process.
 * <p>
 * This interface is used for polymorphic JSON serialization and deserialization of task-specific data.
 * The {@code taskType} property determines the actual subclass being used.
 * </p>
 *
 * <p>The interface is {@link Serializable} because hypersistence-utils clones the JSON attribute for
 * Hibernate's dirty checking, and since version 3.15 its default serializer does that through Java
 * serialization - version 3.9, used before the move to Hibernate 7, cloned through Jackson instead. Without
 * it, creating a user task fails with {@code NonSerializableObjectException}.</p>
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
public interface TaskData extends Serializable {
}
