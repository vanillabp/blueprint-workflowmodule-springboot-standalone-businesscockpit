import {createElement, useEffect} from "react";
import {ApplicationRef} from "@angular/core";
import {createApplication} from "@angular/platform-browser";
import {appConfig} from "./main.config";
import {createCustomElement} from "@angular/elements";
import { UserTaskComponent }  from '@library';
import {UserTaskForm} from "@vanillabp/bc-shared";

// @ts-ignore
const buildVersion = process.env.BUILD_VERSION;
// @ts-ignore
const buildTimestamp = new Date(process.env.BUILD_TIMESTAMP);

const UserTaskFormComponent: UserTaskForm = ({userTask}) => {
    const init = async () => {
        if (customElements.get("loan-approval-user-task-form") !== undefined) {
            return;
        }
        const app: ApplicationRef = await createApplication(appConfig);
        const userTaskFormComponent = createCustomElement(
            UserTaskComponent,
            {injector: app.injector});
        customElements.define("loan-approval-user-task-form", userTaskFormComponent);
    };
    init();
    return createElement("loan-approval-user-task-form", { 'user-task': JSON.stringify(userTask) });
}

export {
    buildVersion,
    buildTimestamp,
    UserTaskFormComponent as UserTaskForm
};
