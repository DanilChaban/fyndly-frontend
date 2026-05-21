import { Routes } from '@angular/router';
import { languageGuard } from '@core/guards/language-guard';

export const routes: Routes = [
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
