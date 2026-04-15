import { Component, Input, OnInit } from '@angular/core';
import { BcUserTask } from "@vanillabp/bc-types";
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'loan-approval-user-task-form-assess-risk',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    ButtonModule, 
    RadioButtonModule, 
    CardModule,
    DatePipe
  ],
  templateUrl: './user-task-form.html',
  styleUrl: './user-task-form.scss'
})
export class UserTaskFormComponent implements OnInit {
  @Input() userTask!: BcUserTask;
  
  amount: number | null = null;
  riskAcceptable: boolean | null = null;
  completedBy: string | null = null;
  loading = false;
  forbidden: boolean = false;
  
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.fetchExistingData();
  }
  
  fetchExistingData(): void {
    if (!this.userTask.businessId) return;
    
    const baseUrl = `${this.userTask.workflowModuleUri}/api/loan-approval`;
    const loanRequestId = this.userTask.businessId;
    
    this.http.get<any>(`${baseUrl}/${loanRequestId}/forms/${this.userTask.id}/assess-risk`)
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
  
  handleCompleteTask(): void {
    if (!this.userTask.businessId || !this.userTask.id) {
      console.error("Missing workflow ID or task ID");
      return;
    }
    
    if (this.riskAcceptable === null) {
      console.error("Please select a risk assessment option");
      return;
    }
    
    this.loading = true;
    const baseUrl = `${this.userTask.workflowModuleUri}/api/loan-approval`;
    const loanRequestId = this.userTask.businessId;
    
    this.http.post<any>(`${baseUrl}/${loanRequestId}/forms/${this.userTask.id}/assess-risk`, {
      riskIsAcceptable: this.riskAcceptable
    }).subscribe({
      next: () => {
        console.log("Task completed successfully");
        this.loading = false;
        window.location.reload();
      },
      error: (error) => {
        console.error("Error completing task:", error);
        this.loading = false;
      }
    });
  }
  
  handleSaveTask(): void {
    if (!this.userTask.businessId || !this.userTask.id) {
      console.error("Missing workflow ID or task ID");
      return;
    }
    
    this.loading = true;
    const baseUrl = `${this.userTask.workflowModuleUri}/api/loan-approval`;
    const loanRequestId = this.userTask.businessId;
    
    this.http.put<any>(`${baseUrl}/${loanRequestId}/forms/${this.userTask.id}/assess-risk`, {
      riskIsAcceptable: this.riskAcceptable
    }).subscribe({
      next: () => {
        console.log("Task saved successfully");
        this.loading = false;
      },
      error: (error) => {
        console.error("Error saving task:", error);
        this.loading = false;
      }
    });
  }
}
