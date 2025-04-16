import { Component, Input, OnInit } from "@angular/core";
import { BcUserTask, BcWorkflow } from "@vanillabp/bc-shared";
import { CommonModule } from "@angular/common";

@Component({
  selector: "loan-approval-workflow-root-page",
  standalone: true,
  templateUrl: "./loan-approval-workflow-root-page.component.html",
  styleUrl: "./loan-approval-workflow-root-page.component.scss",
  imports: [CommonModule],
  providers: [],
})
export class LoanApprovalWorkflowRootPageComponent implements OnInit {
  @Input() workflow!: BcWorkflow;
  
  loaded = false;
  userTasks: BcUserTask[] | undefined;

  ngOnInit(): void {
    this.loadUserTasks();
  }

  private async loadUserTasks(): Promise<void> {
    if (!this.loaded) {
      this.loaded = true;
      try {
        const tasks = await this.workflow.getUserTasks(true, false);
        this.userTasks = tasks;
      } catch (error) {
        this.userTasks = [];
      }
    }
  }
}
