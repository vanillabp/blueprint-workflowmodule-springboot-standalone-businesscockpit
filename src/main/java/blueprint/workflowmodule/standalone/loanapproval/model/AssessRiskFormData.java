package blueprint.workflowmodule.standalone.loanapproval.model;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Represents the form data for assessing risk in the loan approval process.
 * <p>
 * This class contains only the {@code riskAcceptable} boolean,
 * as it is the only field that the user can modify in the user task form.
 * </p>
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AssessRiskFormData implements TaskData {

    /** Indicates whether the assessed risk is acceptable. */
    private Boolean riskAcceptable;

    /**
     * JPA uses `hashCode` and `equals` for determination
     * whether to update the column this class is mapped to.
     *
     * @return The hash code
     */
    @Override
    public int hashCode() {
        return HashCodeBuilder.reflectionHashCode(this);
    }

    /**
     * JPA uses `hashCode` and `equals` for determination
     * whether to update the column this class is mapped to.
     *
     * @param obj The object to compare to
     * @return Whether the objects are equal or not
     */
    @Override
    public boolean equals(
            Object obj) {
        return EqualsBuilder.reflectionEquals(this, obj);
    }

}
