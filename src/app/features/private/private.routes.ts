import { Routes } from '@angular/router';
import { PrivateComponent } from '@private/components/private/private.component';

export const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        loadComponent: () => import('@home/components/home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('@settings/components/settings/settings.component').then((c) => c.SettingsComponent),
        data: {
          title: 'global.private.routes.settings.title',
          description: 'global.private.routes.settings.description',
        },
      },
      {
        path: '**',
        loadComponent: () => import('@core/components/not-found/not-found.component').then((c) => c.NotFoundComponent),
      },
    ],
  },
];
