import { Routes } from '@angular/router';
import { languageGuard } from '@core/guards/language-guard';
import { DEFAULT_LANGUAGE } from '@core/i18n/constants/constants';
import { authGuard } from '@core/guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: DEFAULT_LANGUAGE,
  },
  {
    path: ':lang',
    canActivate: [languageGuard],
    children: [
      {
        path: '',
        canActivate: [authGuard],
        data: { access: 'public' },
        loadChildren: () => import('@public/public.routes').then((m) => m.routes),
      },
      {
        path: '',
        canActivate: [authGuard],
        data: { access: 'private' },
        loadChildren: () => import('@private/private.routes').then((m) => m.routes),
      },
    ],
  },
];
