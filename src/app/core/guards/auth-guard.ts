import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, map, take } from 'rxjs';
import { UserService } from '@core/services/api/user.service';
import { AuthAccess } from '@core/types/auth-access';
import { LocalizedRouterService } from '@core/services/localized-router.service';

export const authGuard: CanActivateFn = (route) => {
  const userService = inject(UserService);
  const localizedRouterService = inject(LocalizedRouterService);

  const access = route.data['access'] as AuthAccess;

  userService.me.reload();

  return toObservable(userService.me.status).pipe(
    filter((status) => status !== 'loading' && status !== 'reloading'),
    take(1),
    map((status) => {
      const isAuthenticated = status === 'resolved';

      if (access === 'private') {
        return isAuthenticated ? true : localizedRouterService.createUrlTree(['sign-in']);
      }

      if (access === 'public') {
        return isAuthenticated ? localizedRouterService.createUrlTree(['home']) : true;
      }

      return true;
    }),
  );
};
