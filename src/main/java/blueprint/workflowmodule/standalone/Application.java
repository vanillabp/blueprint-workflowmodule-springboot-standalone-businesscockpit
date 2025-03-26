package blueprint.workflowmodule.standalone;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import blueprint.workflowmodule.standalone.loanapproval.config.LoanApprovalProperties;
import io.vanillabp.springboot.ModuleAndWorkerAwareSpringApplication;

@SpringBootApplication
@EnableConfigurationProperties(LoanApprovalProperties.class)
public class Application {

    public static void main(
            String[] args) {
        ModuleAndWorkerAwareSpringApplication.run(Application.class, args);
    }

}
