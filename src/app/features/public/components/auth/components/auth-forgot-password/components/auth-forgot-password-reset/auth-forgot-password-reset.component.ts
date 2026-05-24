import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FlCardComponent } from '@common/fl-card/components/fl-card/fl-card.component';
import { FlCardContentComponent } from '@common/fl-card/components/fl-card-content/fl-card-content.component';
import { FlCardActionsComponent } from '@common/fl-card/components/fl-card-actions/fl-card-actions.component';
import { AuthForgotPasswordResetFormComponent } from '@auth/components/auth-forgot-password/components/forms/auth-forgot-password-reset-form/auth-forgot-password-reset-form.component';
import { AuthForgotPasswordHeaderComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-header/auth-forgot-password-header.component';
import { AuthForgotPasswordActionsComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-actions/auth-forgot-password-actions.component';

@Component({
  selector: 'app-auth-forgot-password-reset',
  imports: [
    FlCardComponent,
    FlCardContentComponent,
    FlCardActionsComponent,
    AuthForgotPasswordHeaderComponent,
    AuthForgotPasswordResetFormComponent,
    AuthForgotPasswordActionsComponent,
  ],
  templateUrl: './auth-forgot-password-reset.component.html',
  styleUrl: './auth-forgot-password-reset.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthForgotPasswordResetComponent {
  onSubmit(form: FormGroup): void {
    console.log(form.getRawValue());
  }
}
