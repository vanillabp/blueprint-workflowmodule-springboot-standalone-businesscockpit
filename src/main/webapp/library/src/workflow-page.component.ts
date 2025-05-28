import { CommonModule } from "@angular/common";
import { Component, EventEmitter, HostListener, Input, OnInit, Output, } from "@angular/core";
import { BcUserTask, BcWorkflow } from "@vanillabp/bc-shared";
import { WorkflowPageComponent as LoanApprovalProcessWorkflowPage } from "./loan-approval/workflow-page.component";

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
  selector: "loan-approval-workflowmodule-workflow-page",
  standalone: true,
  imports: [ CommonModule, LoanApprovalProcessWorkflowPage ],
  templateUrl: "./workflow-page.component.html",
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

  ngOnInit() {
    this.workflow.getUserTasks = (a, b) => this.getUserTasks(a, b);
  }
}
