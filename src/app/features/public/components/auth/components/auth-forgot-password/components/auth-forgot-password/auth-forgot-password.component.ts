import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FlCardActionsComponent } from '@common/fl-card/components/fl-card-actions/fl-card-actions.component';
import { FlCardComponent } from '@common/fl-card/components/fl-card/fl-card.component';
import { FlCardContentComponent } from '@common/fl-card/components/fl-card-content/fl-card-content.component';
import { AuthForgotPasswordFormComponent } from '@auth/components/auth-forgot-password/components/forms/auth-forgot-password-form/auth-forgot-password-form.component';
import { AuthForgotPasswordHeaderComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-header/auth-forgot-password-header.component';
import { AuthForgotPasswordActionsComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-actions/auth-forgot-password-actions.component';

@Component({
  selector: 'app-auth-forgot-password',
  imports: [
    FlCardActionsComponent,
    FlCardComponent,
    FlCardContentComponent,
    AuthForgotPasswordFormComponent,
    AuthForgotPasswordHeaderComponent,
    AuthForgotPasswordActionsComponent,
  ],
  templateUrl: './auth-forgot-password.component.html',
  styleUrl: './auth-forgot-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthForgotPasswordComponent {
  onSubmit(form: FormGroup): void {
    console.log(form.getRawValue());
  }
}
