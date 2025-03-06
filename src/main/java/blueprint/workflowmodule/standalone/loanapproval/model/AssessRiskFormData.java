package blueprint.workflowmodule.standalone.loanapproval.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

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

    @Override
    public int hashCode() {
        return HashCodeBuilder.reflectionHashCode(this);
    }

    @Override
    public boolean equals(Object obj) {
        return EqualsBuilder.reflectionEquals(this, obj);
    }
}
