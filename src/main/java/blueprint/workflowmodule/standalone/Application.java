package blueprint.workflowmodule.standalone;

import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.vanillabp.springboot.ModuleAndWorkerAwareSpringApplication;

@SpringBootApplication
public class Application {

    public static void main(
            String[] args) {
        ModuleAndWorkerAwareSpringApplication.run(Application.class, args);
    }

}
