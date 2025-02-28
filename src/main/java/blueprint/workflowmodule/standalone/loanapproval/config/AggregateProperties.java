package blueprint.workflowmodule.standalone.loanapproval.config;

import io.vanillabp.springboot.modules.WorkflowModuleIdAwareProperties;
import io.vanillabp.springboot.modules.WorkflowModuleProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Configuration class for defining properties specific to the aggregate workflow module.
 * Implements {@link WorkflowModuleIdAwareProperties} to provide the workflow module ID.
 */
@Configuration
@ConfigurationProperties(prefix = AggregateProperties.WORKFLOW_MODULE_ID)
public class AggregateProperties implements WorkflowModuleIdAwareProperties {

    /**
     * The identifier for the aggregate workflow module.
     */
    public static final String WORKFLOW_MODULE_ID = "loanapproval";

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
    public static WorkflowModuleProperties AggregateModuleProperties() {

        return new WorkflowModuleProperties(AggregateProperties.class, WORKFLOW_MODULE_ID);
    }
}
