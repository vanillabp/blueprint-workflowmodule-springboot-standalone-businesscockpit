package blueprint.workflowmodule.standalone.loanapproval;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AggregateRepository extends JpaRepository<Aggregate, String> {
}
