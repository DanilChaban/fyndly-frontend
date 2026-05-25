import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { handleApiResourceState } from '@core/helpers/api/handle-api-resource-state';
import { LocalizedRouterService } from '@core/services/localized-router.service';
import { setServerValidationErrors } from '@core/helpers/set-server-validation-errors';
import { FlToastService } from '@ui/fl-toast/services/fl-toast.service';
import { FlCardActionsComponent } from '@common/fl-card/components/fl-card-actions/fl-card-actions.component';
import { FlCardComponent } from '@common/fl-card/components/fl-card/fl-card.component';
import { FlCardContentComponent } from '@common/fl-card/components/fl-card-content/fl-card-content.component';
import { AuthForgotPasswordFormComponent } from '@auth/components/auth-forgot-password/components/forms/auth-forgot-password-form/auth-forgot-password-form.component';
import { AuthForgotPasswordHeaderComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-header/auth-forgot-password-header.component';
import { AuthForgotPasswordActionsComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-actions/auth-forgot-password-actions.component';
import { AuthService } from '@auth/apis/auth.service';
import { SessionStorageResetPasswordService } from '@auth/services/session-storage-reset-password.service';

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
export class AuthForgotPasswordComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly flToastService = inject(FlToastService);
  private readonly localizedRouterService = inject(LocalizedRouterService);
  private readonly sessionStorageResetPasswordService = inject(SessionStorageResetPasswordService);

  retryAfterSeconds = signal(0);

  private form: FormGroup = new FormGroup({});

  constructor() {
    handleApiResourceState(this.authService.forgotPassword.resource, {
      onSuccess: () => {
        this.flToastService.success(`global.validation.server_success.forgot_password_success`);
        void this.localizedRouterService.navigate(['reset-password']);
        this.sessionStorageResetPasswordService.setData(this.form.get('email')?.value, false);
        this.retryAfterSeconds.set(0);
      },
      onError: (errorCode, error) => {
        if (errorCode) {
          this.flToastService.error(`global.validation.server_error.${errorCode}`);
        } else {
          setServerValidationErrors(this.form, error.error.fields);
        }

        this.retryAfterSeconds.set(error.error.retryAfterSeconds ?? 0);
      },
      onReset: () => {
        this.authService.forgotPassword.reset();
      },
    });
  }

  ngOnInit(): void {
    this.sessionStorageResetPasswordService.clearData();
  }

  onSubmit(form: FormGroup): void {
    this.form = form;
    this.authService.forgotPassword.execute({ email: form.get('email')?.value });
  }
}
