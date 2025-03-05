package blueprint.workflowmodule.standalone.loanapproval.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.Map;


/**
 * Represents the data model for a standalone workflow aggregate. This
 * entity is mapped to the {@code LOANAPPROVAL} table in the database.
 *
 * <p>
 * The fields include:
 * <ul>
 *   <li>{@code loanRequestId}          — A unique identifier for each loan request.</li>
 *   <li>{@code riskAcceptable}         — An indicator that shows whether the risk of lending is acceptable.</li>
 *   <li>{@code amount}                 — The amount that was requested to loan   </li>
 *   <li>{@code assessRiskTaskId}</li>  — A unique Identifier for each Task ID managed by the business process engine (e.g., camunda)
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
     * The primary key for the {@code LOANAPPROVAL} table.
     */
    @Id
    public String loanRequestId;

    /**
     * Indicates whether this loan request should be accepted or denied.
     */
    @Column
    private Boolean riskAcceptable;

    /**
     * The loan size
     */
    @Column
    private Integer amount;

    /**
     * Mapping of loanRequestId and a TaskId with a Task.
     */
    @JsonIgnore
    @OneToMany(
        cascade = {CascadeType.ALL, CascadeType.MERGE},
        fetch = FetchType.LAZY)
    @MapKey(name = "taskId")
    @JoinTable(
        name = "LOANAPPROVAL_TASKS",
        joinColumns = {@JoinColumn(name = "aggregate_id", referencedColumnName = "loanRequestId")},
        inverseJoinColumns = {@JoinColumn(name = "task_id", referencedColumnName = "taskId")})
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
