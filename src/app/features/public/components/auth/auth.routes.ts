import { Routes } from '@angular/router';
import { emailVerificationGuardGuard } from '@core/guards/email-verification-guard-guard';
import { AuthComponent } from '@auth/components/auth/components/auth/auth.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'sign-in',
        loadComponent: () =>
          import('@auth/components/auth-sign-in/components/auth-sign-in/auth-sign-in.component').then(
            (c) => c.AuthSignInComponent,
          ),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('@auth/components/auth-sign-up/components/auth-sign-up/auth-sign-up.component').then(
            (c) => c.AuthSignUpComponent,
          ),
      },
      {
        path: 'verify-email',
        canActivate: [emailVerificationGuardGuard],
        loadComponent: () =>
          import('@auth/components/auth-email-verification/components/auth-email-verification/auth-email-verification.component').then(
            (c) => c.AuthEmailVerificationComponent,
          ),
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('@auth/components/auth-forgot-password/components/auth-forgot-password/auth-forgot-password.component').then(
            (c) => c.AuthForgotPasswordComponent,
          ),
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import('@auth/components/auth-forgot-password/components/auth-forgot-password-reset/auth-forgot-password-reset.component').then(
            (c) => c.AuthForgotPasswordResetComponent,
          ),
      },
    ],
  },
];
