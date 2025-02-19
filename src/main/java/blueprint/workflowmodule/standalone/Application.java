package blueprint.workflowmodule.standalone;

import io.vanillabp.springboot.ModuleAndWorkerAwareSpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackageClasses = Application.class)
public class Application {

    public static void main(String[] args) {
        ModuleAndWorkerAwareSpringApplication.run(Application.class, args);
    }

}
