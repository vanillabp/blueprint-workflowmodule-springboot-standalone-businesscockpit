package blueprint.workflowmodule.standalone.loanapproval;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoanApprovalTaskFormDataImpl implements LoanApprovalTaskFormData {

    private String applicantName;

    private int creditScore;

    private String loanReason;
}
