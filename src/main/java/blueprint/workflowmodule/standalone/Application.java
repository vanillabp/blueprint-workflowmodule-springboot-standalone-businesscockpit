package blueprint.workflowmodule.standalone;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

import blueprint.workflowmodule.standalone.loanapproval.config.LoanApprovalProperties;
import io.vanillabp.springboot.ModuleAndWorkerAwareSpringApplication;
import io.vanillabp.springboot.modules.WorkflowModuleProperties;

@SpringBootApplication
@EnableConfigurationProperties(LoanApprovalProperties.class)
public class Application {

    public static void main(
            String[] args) {
        ModuleAndWorkerAwareSpringApplication.run(Application.class, args);
    }

    /**
     * Defines a bean for workflow module properties.
     *
     * @return A {@link WorkflowModuleProperties} instance configured for the aggregate module.
     */
    @Bean
    public static WorkflowModuleProperties ModuleProperties() {

        return new WorkflowModuleProperties(LoanApprovalProperties.class, LoanApprovalProperties.WORKFLOW_MODULE_ID);

    }

}
