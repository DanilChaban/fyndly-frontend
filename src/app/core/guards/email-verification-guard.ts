import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { LocalizedRouterService } from '@core/services/localized-router.service';
import { SessionStorageVerificationService } from '@auth/services/session-storage-verification.service';

export const emailVerificationGuard: CanActivateFn = () => {
  const localizedRouterService = inject(LocalizedRouterService);
  const sessionStorageVerificationService = inject(SessionStorageVerificationService);

  if (sessionStorageVerificationService.hasData()) {
    return true;
  }

  return localizedRouterService.createUrlTree(['sign-in']);
};
