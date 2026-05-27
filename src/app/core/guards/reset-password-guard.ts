import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { LocalizedRouterService } from '@core/services/localized-router.service';
import { SessionStorageResetPasswordService } from '@auth/services/session-storage-reset-password.service';

export const resetPasswordGuard: CanActivateFn = () => {
  const localizedRouterService = inject(LocalizedRouterService);
  const sessionStorageResetPasswordService = inject(SessionStorageResetPasswordService);

  if (sessionStorageResetPasswordService.hasData()) {
    return true;
  }

  return localizedRouterService.createUrlTree(['forgot-password']);
};
