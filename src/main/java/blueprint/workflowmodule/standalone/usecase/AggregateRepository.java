package blueprint.workflowmodule.standalone.usecase;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AggregateRepository extends JpaRepository<Aggregate, String> {
}
