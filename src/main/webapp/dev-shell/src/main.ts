import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";

import { appConfig } from "@vanillabp/bc-dev-shell-angular";

import {
  UserTaskFormComponent as LoanApprovalWorkflowModuleUserTaskFormComponent
} from "../../library/src/user-task-form.component";
import {
  WorkflowPageComponent as LoanApprovalWorkflowModulePageComponent
} from "../../library/src/workflow-page.component";
import { provideHttpClient } from "@angular/common/http";
import { provideAnimations } from "@angular/platform-browser/animations";

bootstrapApplication(
  AppComponent,
  appConfig(
    "/official-api/v1",
      LoanApprovalWorkflowModuleUserTaskFormComponent,
      LoanApprovalWorkflowModulePageComponent,
    {
      //add components here that should be accessible in dev-shell
    },
    [
      provideAnimations(),
      provideHttpClient(),
    ],
  ),
).catch((err) => console.error(err));
