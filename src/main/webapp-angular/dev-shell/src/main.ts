import { bootstrapApplication } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";

import { appConfig } from "@vanillabp/bc-dev-shell-angular";

import { UserTaskComponent } from "../../library/src/user-task.component";
import { LoanApprovalRootUserTaskComponent } from "../../library/src/loan-approval/loan-approval-root-usertask/loan-approval-root-user-task.component";
import { LoanApprovalWorkflowRootPageComponent} from "../../library/src/loan-approval/loan-approval-root-workflow-page/loan-approval-workflow-root-page.component";
import { HttpClient, provideHttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { importProvidersFrom } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";

bootstrapApplication(
  AppComponent,
  appConfig(
    "/official-api/v1",
      UserTaskComponent,
      LoanApprovalWorkflowRootPageComponent,
    {
      //add components here that should be accessible in dev-shell

    },
    [
      provideAnimations(),
      provideHttpClient(),
      importProvidersFrom(
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ),
    ],
  ),
).catch((err) => console.error(err));

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    "/wm/loan-approval/assets/translations/",
    ".json?v=" + Date.now(),
  );
}
