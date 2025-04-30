import {ApplicationConfig, importProvidersFrom} from "@angular/core";
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export const appConfig: ApplicationConfig = {
    providers: [
        provideAnimations(),
        provideHttpClient(),
        importProvidersFrom(TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            }
        }))
    ]
};

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '/wm/loan-approval/assets/translations/', '.json?v=' + Date.now());
}
