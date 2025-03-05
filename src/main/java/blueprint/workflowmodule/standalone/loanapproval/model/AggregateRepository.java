package blueprint.workflowmodule.standalone.loanapproval.model;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AggregateRepository extends JpaRepository<Aggregate, String> {
}
