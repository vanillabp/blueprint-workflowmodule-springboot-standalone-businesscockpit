package blueprint.workflowmodule.standalone.loanapproval.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.vanillabp.springboot.modules.WorkflowModuleIdAwareProperties;
import io.vanillabp.springboot.modules.WorkflowModuleProperties;
import lombok.Getter;
import lombok.Setter;

/**
 * Configuration class for defining properties specific to the aggregate workflow module.
 * Implements {@link WorkflowModuleIdAwareProperties} to provide the workflow module ID.
 */
@Configuration
@ConfigurationProperties(prefix = LoanApprovalProperties.WORKFLOW_MODULE_ID)
@Getter
@Setter
public class LoanApprovalProperties implements WorkflowModuleIdAwareProperties {

    /**
     * The identifier for the aggregate workflow module.
     */
    public static final String WORKFLOW_MODULE_ID = "loan-approval";

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

    /**
     * Defines a bean for workflow module properties.
     *
     * @return A {@link WorkflowModuleProperties} instance configured for the aggregate module.
     */
    @Bean
    public static WorkflowModuleProperties ModuleProperties() {

        return new WorkflowModuleProperties(LoanApprovalProperties.class, WORKFLOW_MODULE_ID);
    }
}
