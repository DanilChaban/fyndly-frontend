import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslocoPipe } from '@jsverse/transloco';
import { handleApiResourceState } from '@core/helpers/api/handle-api-resource-state';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';
import { FlToastService } from '@ui/fl-toast/services/fl-toast.service';
import { AuthService } from '@auth/apis/auth.service';
import { SessionStorageResetPasswordService } from '@auth/services/session-storage-reset-password.service';

@Component({
  selector: 'app-auth-forgot-password-resend-code',
  imports: [TranslocoPipe, FlButtonComponent, MatIcon],
  templateUrl: './auth-forgot-password-resend-code.component.html',
  styleUrl: './auth-forgot-password-resend-code.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthForgotPasswordResendCodeComponent {
  private readonly authService = inject(AuthService);
  private readonly flToastService = inject(FlToastService);
  private readonly sessionStorageResetPasswordService = inject(SessionStorageResetPasswordService);

  email = this.sessionStorageResetPasswordService.email;
  loading = this.authService.resendResendPasswordCode.resource.isLoading;

  retryAfterSeconds = signal(0);

  constructor() {
    handleApiResourceState(this.authService.resendResendPasswordCode.resource, {
      onSuccess: () => {
        this.flToastService.success(`global.validation.server_success.forgot_password_success`);
        this.retryAfterSeconds.set(0);
      },
      onError: (errorCode, error) => {
        if (errorCode) {
          this.flToastService.error(`global.validation.server_error.${errorCode}`);
        }
        this.retryAfterSeconds.set(error.error.retryAfterSeconds ?? 0);
      },
      onReset: () => {
        this.authService.forgotPassword.reset();
      },
    });
  }

  resendCode(): void {
    const email = this.email();

    if (!email) {
      return;
    }

    this.authService.resendResendPasswordCode.execute({ email });
  }
}
