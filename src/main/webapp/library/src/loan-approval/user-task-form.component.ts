import { Component, Input } from "@angular/core";
import { BcUserTask } from "@vanillabp/bc-types";
import { UserTaskFormComponent as LoanApprovalUserTaskFormAssessRisk } from "./assess-risk-form/user-task-form";

@Component({
  selector: "loan-approval-process-user-task-form",
  standalone: true,
  templateUrl: "./user-task-form.component.html",
  providers: [],
  imports: [ LoanApprovalUserTaskFormAssessRisk ],
})
export class UserTaskFormComponent {
  @Input() userTask!: BcUserTask;
}
