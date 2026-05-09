import { Routes } from '@angular/router';
import { PublicComponent } from '@public/components/public/public.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@auth/auth.routes').then((m) => m.routes),
      },
    ],
  },
];
