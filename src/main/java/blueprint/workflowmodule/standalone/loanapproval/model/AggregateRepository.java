package blueprint.workflowmodule.standalone.loanapproval.model;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository interface for managing {@link Aggregate} entities.
 *
 * <p>
 * This interface extends Spring Data JPA's {@code JpaRepository} to provide
 * CRUD operations and query methods for {@code Aggregate} instances.
 * It leverages Spring Data's method query derivation and provides basic persistence
 * functionality out-of-the-box.
 * </p>
 *
 * @version 1.0
 */
public interface AggregateRepository extends JpaRepository<Aggregate, String> {
}
