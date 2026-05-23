import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { LocalizedRouterService } from '@core/services/localized-router.service';
import { AuthSessionStorageVerificationService } from '@auth/services/auth-session-storage-verification.service';

export const emailVerificationGuardGuard: CanActivateFn = () => {
  const localizedRouterService = inject(LocalizedRouterService);
  const authSessionStorageVerificationService = inject(AuthSessionStorageVerificationService);

  if (authSessionStorageVerificationService.data()?.email) {
    return true;
  }

  return localizedRouterService.navigate(['sign-in']);
};
