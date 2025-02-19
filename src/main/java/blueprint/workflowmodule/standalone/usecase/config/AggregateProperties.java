package blueprint.workflowmodule.standalone.usecase.config;

import io.vanillabp.springboot.modules.WorkflowModuleIdAwareProperties;
import io.vanillabp.springboot.modules.WorkflowModuleProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 *
 */
@Configuration
@ConfigurationProperties(prefix = AggregateProperties.WORKFLOW_MODULE_ID)
public class AggregateProperties implements WorkflowModuleIdAwareProperties {

    /**
     *
     */
    public static final String WORKFLOW_MODULE_ID = "aggregate";

    /**
     *
     * @return test
     */
    @Override
    public String getWorkflowModuleId() {
        return WORKFLOW_MODULE_ID;
    }

    /**
     *
     * @return test
     */
    @Bean
    public static WorkflowModuleProperties AggregateModuleProperties() {

        return new WorkflowModuleProperties(AggregateProperties.class, WORKFLOW_MODULE_ID);
    }
}
