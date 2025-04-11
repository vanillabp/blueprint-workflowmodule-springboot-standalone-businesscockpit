package blueprint.workflowmodule.standalone.loanapproval.model;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Repository interface for managing {@link Aggregate} entities.
 *
 * <p>
 * This interface extends Spring Data {@code MongoRepository} to provide
 * CRUD operations and query methods for {@code Aggregate} instances.
 * It leverages Spring Data's method query derivation and provides basic persistence
 * functionality out-of-the-box.
 * </p>
 *
 * @version 1.0
 */
public interface AggregateRepository extends MongoRepository<Aggregate, String> {
}
