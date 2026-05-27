import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { LocalizedRouterService } from '@core/services/localized-router.service';

export const authErrorInterceptor: HttpInterceptorFn = (request, next) => {
  const localizedRouterService = inject(LocalizedRouterService);

  return next(request).pipe(
    catchError((error) => {
      if (error.status === 401) {
        void localizedRouterService.createUrlTree(['sign-in']);
      }

      return throwError(() => error);
    }),
  );
};
