import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthSignInFormComponent } from '@auth/components/auth-sign-in/components/forms/auth-sign-in-form/auth-sign-in-form.component';

@Component({
  selector: 'app-auth-sign-in',
  imports: [AuthSignInFormComponent, AuthSignInFormComponent],
  templateUrl: './auth-sign-in.component.html',
  styleUrl: './auth-sign-in.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSignInComponent {}
