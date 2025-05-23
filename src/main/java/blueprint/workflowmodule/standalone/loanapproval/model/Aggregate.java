package blueprint.workflowmodule.standalone.loanapproval.model;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.MapKey;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Represents the data model for a standalone businesscockpit
 * <a href="https://github.com/vanillabp/spi-for-java/blob/main/README.md#process-specific-workflow-aggregate">workflow aggregate</a>.
 * This entity is mapped to the {@code LOANAPPROVAL} table in the database.
 *
 * <p>
 * The fields include:
 * <ul>
 *   <li>{@code loanRequestId}          — A unique identifier for each loan request.</li>
 *   <li>{@code riskAcceptable}         — An indicator that shows whether the risk of lending is acceptable.</li>
 *   <li>{@code amount}                 — The amount that was requested to loan   </li>
 *   <li>{@code tasks}                  — A Hashmap join table that saves maps the loanRequestId to a taskId</li>
 * </ul>
 *
 * {@code getTasks} is a simple getter method getting all the tasks from the joined table of {@code tasks}.
 * </p>
 *
 * @version 1.0
 */
@Entity
@Table(name = "LOANAPPROVAL")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Aggregate {

    /**
     * The business identifier of this use case.
     */
    @Id
    private String loanRequestId;

    /**
     * The loan size.
     */
    @Column
    private Integer amount;

    /**
     * Indicates whether the risk was assessed as acceptable.
     */
    @Column
    private Boolean riskAcceptable;

    /**
     * Used in BPMN expression to not access data of aggregate directly.
     * By using this pattern changes of properties of the aggregate
     * doe not affect workflows already started before the change.
     * Additionally, in BPMN the intention of this expression has to
     * be named explicitly e.g. '${loanRequestAccepted}' what is a
     * better documentation of the purpose.
     *
     * @return Whether the loan request was accepted
     */
    public Boolean isLoanRequestAccepted() {

        if (riskAcceptable == null) {
            return null;
        }
        return true;

    }

    /**
     * Mapping of loanRequestId and a TaskId with a Task.
     */
    @JsonIgnore
    @OneToMany(
            cascade = {
                    CascadeType.ALL, CascadeType.MERGE
            },
            fetch = FetchType.LAZY)
    @MapKey(name = "taskId")
    @JoinTable(
            name = "LOANAPPROVAL_TASKS",
            joinColumns = {
                    @JoinColumn(name = "AGGREGATE_ID", referencedColumnName = "loanRequestId")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "TASK_ID", referencedColumnName = "taskId")
            })
    private Map<String, Task> tasks = new HashMap<>();

    /**
     * gets a specific TaskEntity based on taskId.
     *
     * @param taskId unique identifier for each task started by VanillaBP
     * @return returns a Task object.
     */
    public Task getTask(
            final String taskId) {

        return getTasks().get(taskId);

    }

}
