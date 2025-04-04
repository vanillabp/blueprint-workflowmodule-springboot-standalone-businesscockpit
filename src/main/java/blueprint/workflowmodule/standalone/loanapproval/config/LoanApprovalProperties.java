package blueprint.workflowmodule.standalone.loanapproval.config;

import org.springframework.boot.context.properties.ConfigurationProperties;

import io.vanillabp.springboot.modules.WorkflowModuleIdAwareProperties;
import lombok.Getter;
import lombok.Setter;

/**
 * Configuration class for defining properties specific to the workflow module.
 * Implements {@link WorkflowModuleIdAwareProperties} to provide the workflow module ID.
 */
@ConfigurationProperties(prefix = LoanApprovalProperties.WORKFLOW_MODULE_ID)
@Getter
@Setter
public class LoanApprovalProperties implements WorkflowModuleIdAwareProperties {

    /**
     * The identifier for the workflow module.
     */
    public static final String WORKFLOW_MODULE_ID = "loan-approval";

    /**
     * The maximum loan amount.
     */
    private int maxAmount;

    /**
     * Retrieves the workflow module ID.
     *
     * @return The workflow module ID as a string.
     */
    @Override
    public String getWorkflowModuleId() {
        return WORKFLOW_MODULE_ID;
    }

}
