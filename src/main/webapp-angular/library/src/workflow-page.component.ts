import { CommonModule } from "@angular/common";
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { BcUserTask, BcWorkflow } from "@vanillabp/bc-shared";
import { TranslateService } from "@ngx-translate/core";
import {LoanApprovalWorkflowRootPageComponent} from "./loan-approval/loan-approval-root-workflow-page/loan-approval-workflow-root-page.component";

function webComponentsTransform(value: string | BcWorkflow): any {
  if (typeof value === "string") {
    return JSON.parse(value) as BcWorkflow;
  }
  return value;
}

export interface EventHookMessage {
  messageId: number;
  params: any;
}

interface CallbackResponseMessage<T> {
  messageId: number;
  result: T;
}

@Component({
  selector: "workflow-page",
  standalone: true,
  imports: [CommonModule, LoanApprovalWorkflowRootPageComponent],
  templateUrl: "./workflow-page.component.html",
  styleUrl: "./workflow-page.component.scss",
})
export class WorkflowPageComponent implements OnInit {
  @Input({ transform: webComponentsTransform }) workflow!: BcWorkflow;
  @Output("GetUserTasksTrigger") getUserTasksTrigger =
    new EventEmitter<EventHookMessage>();

  bcWorkflowgetUserTasksPromises: Record<
    number,
    { resolve: (value: BcUserTask[] | PromiseLike<BcUserTask[]>) => void }
  > = {};

  getUserTasks(
    activeOnly: boolean,
    limitListAccordingToCurrentUsersPermissions: boolean,
  ) {
    const outerPromise = new Promise<Array<BcUserTask>>((resolve, reject) => {
      const messageId = new Date().getTime();
      const responseHook = new Promise<Array<BcUserTask>>((resolve, reject) => {
        this.bcWorkflowgetUserTasksPromises[messageId] = { resolve };
      });

      // make "main" promise resolve once hook resolved
      resolve(responseHook);

      this.getUserTasksTrigger.emit({
        messageId,
        params: {
          activeOnly,
          limitListAccordingToCurrentUsersPermissions,
        },
      });
    });
    return outerPromise;
  }

  @HostListener("GetUserTasksResult", ["$event.detail"])
  receiveUserTasksResult(detail: CallbackResponseMessage<BcUserTask[]>) {
    console.log("GetUserTasksResult", detail);
    this.bcWorkflowgetUserTasksPromises[detail.messageId].resolve(
      detail.result,
    );
    delete this.bcWorkflowgetUserTasksPromises[detail.messageId];
  }

  constructor(private translate: TranslateService) {
    this.initializeTranslation();
  }

  private initializeTranslation(): void {
    this.translate.addLangs(["de"]);
    this.translate.setDefaultLang("de");
    this.translate.use("de");
  }

  ngOnInit() {
    this.workflow.getUserTasks = (a, b) => this.getUserTasks(a, b);
  }
}
