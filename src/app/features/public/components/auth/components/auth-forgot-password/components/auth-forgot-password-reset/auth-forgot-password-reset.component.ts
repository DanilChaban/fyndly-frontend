import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { handleApiResourceState } from '@core/helpers/api/handle-api-resource-state';
import { setServerValidationErrors } from '@core/helpers/set-server-validation-errors';
import { FlToastService } from '@ui/fl-toast/services/fl-toast.service';
import { FlCardComponent } from '@common/fl-card/components/fl-card/fl-card.component';
import { FlCardContentComponent } from '@common/fl-card/components/fl-card-content/fl-card-content.component';
import { FlCardActionsComponent } from '@common/fl-card/components/fl-card-actions/fl-card-actions.component';
import { AuthForgotPasswordResetFormComponent } from '@auth/components/auth-forgot-password/components/forms/auth-forgot-password-reset-form/auth-forgot-password-reset-form.component';
import { AuthForgotPasswordHeaderComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-header/auth-forgot-password-header.component';
import { AuthService } from '@auth/apis/auth.service';
import { SessionStorageResetPasswordService } from '@auth/services/session-storage-reset-password.service';
import { AuthForgotPasswordResetSuccessComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-reset-success/auth-forgot-password-reset-success.component';
import { AuthForgotPasswordActionsBackwardComponent } from '@auth/components/auth-forgot-password/components/actions/auth-forgot-password-actions-backward/auth-forgot-password-actions-backward.component';

@Component({
  selector: 'app-auth-forgot-password-reset',
  imports: [
    FlCardComponent,
    FlCardContentComponent,
    FlCardActionsComponent,
    AuthForgotPasswordHeaderComponent,
    AuthForgotPasswordResetFormComponent,
    AuthForgotPasswordResetSuccessComponent,
    AuthForgotPasswordActionsBackwardComponent,
  ],
  templateUrl: './auth-forgot-password-reset.component.html',
  styleUrl: './auth-forgot-password-reset.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthForgotPasswordResetComponent {
  private readonly authService = inject(AuthService);
  private readonly flToastService = inject(FlToastService);
  private readonly sessionStorageResetPasswordService = inject(SessionStorageResetPasswordService);

  email = this.sessionStorageResetPasswordService.email;
  passwordChanged = this.sessionStorageResetPasswordService.passwordUpdated;

  private form: FormGroup = new FormGroup({});

  constructor() {
    handleApiResourceState(this.authService.resetPassword.resource, {
      onSuccess: () => {
        const email = this.email();
        if (!email) {
          return;
        }

        this.flToastService.success(`global.validation.server_success.reset_password_success`);
        this.sessionStorageResetPasswordService.setData(email, true);
      },
      onError: (_, error) => {
        const message = error.error.message;
        if (message) {
          this.flToastService.error(message);
        } else {
          setServerValidationErrors(this.form, error.error.fields);
        }
      },
      onReset: () => {
        this.authService.resetPassword.reset();
      },
    });
  }

  onSubmit(form: FormGroup): void {
    this.form = form;
    this.authService.resetPassword.execute({
      email: this.email(),
      ...form.getRawValue(),
    });
  }
}
