import {EnvironmentProviders, importProvidersFrom} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

const createLoader = (http: HttpClient) => new TranslateHttpLoader(http, '/wm/loan-approval/assets/translations/', '.json?v=' + Date.now())

export const provideTranslations = (): EnvironmentProviders =>
    importProvidersFrom(TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: createLoader,
            deps: [HttpClient],
        }
    }));
