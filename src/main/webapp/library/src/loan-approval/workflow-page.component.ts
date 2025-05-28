import { Component, Input, OnInit } from "@angular/core";
import { BcUserTask, BcWorkflow } from "@vanillabp/bc-shared";
import { CommonModule } from "@angular/common";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "loan-approval-process-workflow-page",
  standalone: true,
  templateUrl: "./workflow-page.component.html",
  styleUrl: "./workflow-page.component.scss",
  imports: [CommonModule],
  providers: [],
})
export class WorkflowPageComponent implements OnInit {
  @Input() workflow!: BcWorkflow;

  amount: number | null = null;
  riskAcceptable: boolean | null = null;
  completedBy: string | null = null;
  loaded = false;
  forbidden: boolean = false;
  userTasks: BcUserTask[] | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchExistingData();
    this.loadUserTasks();
  }

  fetchExistingData(): void {
    if (!this.workflow.businessId) return;

    const baseUrl = `${this.workflow.workflowModuleUri}/api/loan-approval`;
    const loanRequestId = this.workflow.businessId;

    this.http.get<any>(`${baseUrl}/${loanRequestId}`)
        .subscribe({
          next: (data) => {
            console.log("Fetched data:", data);
            if (data.amount !== undefined) this.amount = data.amount;
            if (data.riskAcceptable !== undefined) this.riskAcceptable = data.riskAcceptable;
            if (data.completedBy !== undefined) this.completedBy = data.completedBy;
          },
          error: (error) => {
            console.error("Error fetching loan approval data:", error);
            if (error.status === 403) {
              this.forbidden = true;
            }
          }
        });
  }

  private async loadUserTasks(): Promise<void> {
    if (!this.loaded) {
      this.loaded = true;
      try {
        this.userTasks = await this.workflow.getUserTasks(true, false);
      } catch (error) {
        console.error("Could not load user tasks", error);
        this.userTasks = [];
      }
    }
  }
}
