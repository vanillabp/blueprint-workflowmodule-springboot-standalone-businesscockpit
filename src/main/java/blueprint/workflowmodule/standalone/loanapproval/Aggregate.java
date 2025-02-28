package blueprint.workflowmodule.standalone.loanapproval;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


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
 * </ul>
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
     * Input value of the user from the webapp.
     */
    @Column
    private String inputValue;

    /**
     * The task id for risk assessment.
     */
    @Column
    private String assessRiskTaskId;

    /**
     * Amount that was requested as a loan.
     */
    @Column
    private Integer amount;
}
