import {createElement, RefObject} from "react";
import { ApplicationRef } from "@angular/core";
import { createApplication } from "@angular/platform-browser";
import { appConfig } from "./main.config";
import { createCustomElement } from "@angular/elements";
import { WorkflowPage } from "@vanillabp/bc-shared";
import { WorkflowPageComponent } from "@library";

export interface EventHookMessage {
    messageId: number;
    params: any;
}

// @ts-ignore
const buildVersion = process.env.BUILD_VERSION;
// @ts-ignore
const buildTimestamp = new Date(process.env.BUILD_TIMESTAMP);

const WorkflowFormComponent: WorkflowPage = ({workflow}) => {
    const init = async () => {
        console.log("Initializing WorkflowFormComponent: ", workflow);
        if (customElements.get("loan-approval-workflow-form") !== undefined) {
            return;
        }
        const app: ApplicationRef = await createApplication(appConfig);
        const workflowFormComponent = createCustomElement(
            WorkflowPageComponent,
            {injector: app.injector});
        customElements.define("loan-approval-workflow-form", workflowFormComponent);
    };
    init();
    return createElement("loan-approval-workflow-form", { 'workflow': JSON.stringify(workflow), ref: (ref : HTMLDivElement) => {
        ref.addEventListener(
            "GetUserTasksTrigger",
            ((event:CustomEvent<EventHookMessage>) => {
                let result = workflow.getUserTasks(event.detail.params.activeOnly, event.detail.params.limitListAccordingToCurrentUsersPermissions);
                ref.dispatchEvent(new CustomEvent("GetUserTasksResult", {detail: {messageId: event.detail.messageId, result: result}}));
            }) as EventListener
        )
    }});
}

export {
    buildVersion,
    buildTimestamp,
    WorkflowFormComponent as WorkflowPage
};
