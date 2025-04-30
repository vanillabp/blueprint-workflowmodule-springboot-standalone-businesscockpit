import { Component, Input } from "@angular/core";
import { BcUserTask} from "@vanillabp/bc-shared";
import { LoanApprovalUserTaskAssessRiskComponent } from "../loan-approval-usertasks/loan-approval-user-task-assess-risk/loan-approval-user-task-assess-risk.component";
import { registerLocaleData } from "@angular/common";
import localeDe from "@angular/common/locales/de";

// registerLocaleData(localeDe);

@Component({
  selector: "loan-approval-root-user-task",
  standalone: true,
  templateUrl: "./loan-approval-root-user-task.component.html",
  providers: [],
  imports: [
    LoanApprovalUserTaskAssessRiskComponent,
  ],
})
export class LoanApprovalRootUserTaskComponent {
  @Input() userTask!: BcUserTask;
}
