import { Routes } from '@angular/router';
import { PrivateComponent } from '@private/components/private/private.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('@home/components/home/home.component').then((c) => c.HomeComponent),
      },
    ],
  },
];
