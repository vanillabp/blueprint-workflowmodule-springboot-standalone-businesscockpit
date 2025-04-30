import {createApplication} from "@angular/platform-browser";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";
import {provideTranslations} from "./translation-provider";
import {NgZone, Type} from "@angular/core";
import {createCustomElement} from "@angular/elements";

export async function bootstrapWebComponent(name: string, component: Type<unknown>) {
    if (customElements.get(name) !== undefined) {
        return;
    }

    customElements.define(name, createCustomElement(component, {injector: (await createApp()).injector}))
}


const createApp = async () => await createApplication({
    providers: [
        provideAnimations(),
        provideHttpClient(),
        provideTranslations(),
        // @ts-ignore
        globalThis.ngZone ? {provide: NgZone, useValue: globalThis.ngZone} : [],
    ],
});




