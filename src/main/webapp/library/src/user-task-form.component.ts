import { CommonModule } from "@angular/common";
import { Component, Input, ViewEncapsulation } from "@angular/core";
import { BcUserTask } from "@vanillabp/bc-shared";
import {
  UserTaskFormComponent as LoanApprovalProcessUserTaskFormComponent
} from "./loan-approval/user-task-form.component";

function webComponentsTransform(value: string | BcUserTask): any {
  if (typeof value === "string") {
    return JSON.parse(value) as BcUserTask;
  }
  return value;
}

@Component({
  selector: "loan-approval-workflowmodule-user-task-form",
  standalone: true,
  imports: [ CommonModule, LoanApprovalProcessUserTaskFormComponent ],
  templateUrl: "./user-task-form.component.html",
  encapsulation: ViewEncapsulation.None,
})
export class UserTaskFormComponent {
  @Input({ transform: webComponentsTransform }) userTask!: BcUserTask;
}
