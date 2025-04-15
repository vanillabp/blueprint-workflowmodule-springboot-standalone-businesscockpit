import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { BcUserTask } from "@vanillabp/bc-shared";
import { TranslateService } from "@ngx-translate/core";
import { LoanApprovalRootUserTaskComponent } from "./loan-approval/loan-approval-root-usertask/loan-approval-root-user-task.component";

function webComponentsTransform(value: string | BcUserTask): any {
  if (typeof value === "string") {
    return JSON.parse(value) as BcUserTask;
  }
  return value;
}

@Component({
  selector: "workflow-user-task",
  standalone: true,
  imports: [CommonModule, LoanApprovalRootUserTaskComponent],
  templateUrl: "./workflow-user-task.component.html",
  styleUrl: "./workflow-user-task.component.scss",
})
export class WorkflowUserTaskComponent {
  @Input({ transform: webComponentsTransform }) userTask!: BcUserTask;

  constructor(public translate: TranslateService) {
    this.initializeTranslation();
  }

  private initializeTranslation(): void {
    this.translate.addLangs(["de"]);
    this.translate.setDefaultLang("de");
    this.translate.use("de");
  }
}
