import { Component, Input } from "@angular/core";
import { BcWorkflow } from "@vanillabp/bc-shared";
import { CommonModule } from "@angular/common";

@Component({
  selector: "loan-approval-workflow-root-page",
  standalone: true,
  templateUrl: "./loan-approval-workflow-root-page.component.html",
  styleUrl: "./loan-approval-workflow-root-page.component.scss",
  imports: [CommonModule],
  providers: [],
})
export class LoanApprovalWorkflowRootPageComponent {
  @Input() workflow!: BcWorkflow;
}
