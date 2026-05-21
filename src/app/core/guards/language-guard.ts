import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';
import { LanguageCode } from '@core/i18n/types/language-code';
import { AVAILABLE_LANGUAGES } from '@core/i18n/constants/constants';

function isLanguageCode(value: string | null): value is LanguageCode {
  return AVAILABLE_LANGUAGES.includes(value as LanguageCode);
}

export const languageGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const translocoService = inject(TranslocoService);

  const lang = route.paramMap.get('lang');

  if (!isLanguageCode(lang)) {
    return router.createUrlTree(['/en/sign-in']);
  }

  translocoService.setActiveLang(lang);
  return true;
};
