import { CommonModule } from "@angular/common";
import { Component, Input, ViewEncapsulation } from "@angular/core";
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
  templateUrl: "./user-task.component.html",
  styleUrl: "./user-task.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class UserTaskComponent {
  @Input({ transform: webComponentsTransform }) userTask!: BcUserTask;

  constructor(public translate: TranslateService) {
    this.initializeTranslation();
  }

  private initializeTranslation(): void {
    // const browserLang = this.translate.getBrowserLang();
    // this.translate.addLangs(['en','de','klingon']);
    // this.translate.setDefaultLang(browserLang ?? 'de');
    // this.translate.use(browserLang?.match(/en|de/) ? browserLang : 'de');

    this.translate.addLangs(["de"]);
    this.translate.setDefaultLang("de");
    this.translate.use("de");
  }
}
