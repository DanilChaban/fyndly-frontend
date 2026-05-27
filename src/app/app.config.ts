import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import {
  ApplicationConfig,
  isDevMode,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from '@app/app.routes';
import { provideTransloco } from '@jsverse/transloco';
import { SvgIconService } from '@core/icons/services/svg-icon.service';
import { TranslocoHttpLoader } from '@core/i18n/transloco-http-loader';
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '@core/i18n/constants/constants';
import { credentialsInterceptor } from '@core/interceptors/credentials-interceptor';
import { authErrorInterceptor } from '@core/interceptors/auth-error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch(), withInterceptors([credentialsInterceptor, authErrorInterceptor])),
    provideRouter(routes),
    provideTransloco({
      config: {
        availableLangs: [...AVAILABLE_LANGUAGES],
        defaultLang: DEFAULT_LANGUAGE,
        fallbackLang: DEFAULT_LANGUAGE,
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    SvgIconService,
  ],
};
