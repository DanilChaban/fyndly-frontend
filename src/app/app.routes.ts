import { Routes } from '@angular/router';
import { languageGuard } from '@core/guards/language-guard';
import { DEFAULT_LANGUAGE } from '@core/i18n/constants/constants';

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
        loadChildren: () => import('@public/public.routes').then((m) => m.routes),
      },
      {
        path: '',
        loadChildren: () => import('@private/private.routes').then((m) => m.routes),
      },
    ],
  },
];
