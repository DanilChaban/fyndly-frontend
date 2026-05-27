import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { handleApiResourceState } from '@core/helpers/api/handle-api-resource-state';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';
import { FlToastService } from '@ui/fl-toast/services/fl-toast.service';
import { AuthService } from '@auth/apis/auth.service';
import { VerificationStatusService } from '@auth/components/auth-email-verification/services/verification-status.service';
import { VerificationStatus } from '@auth/components/auth-email-verification/enums/verification-status';
import { SessionStorageVerificationService } from '@auth/services/session-storage-verification.service';
import { AuthUiRetryHintComponent } from '@auth/common/ui/auth-ui-retry-hint/auth-ui-retry-hint.component';

@Component({
  selector: 'app-auth-email-verification-resend-code',
  imports: [FlButtonComponent, TranslocoPipe, AuthUiRetryHintComponent],
  templateUrl: './auth-email-verification-resend-code.component.html',
  styleUrl: './auth-email-verification-resend-code.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthEmailVerificationResendCodeComponent {
  private readonly authService = inject(AuthService);
  private readonly sessionStorageVerificationService = inject(SessionStorageVerificationService);
  private readonly flToastService = inject(FlToastService);
  private readonly verificationStatusService = inject(VerificationStatusService);

  loading = this.authService.resendVerificationCode.resource.isLoading;

  email = this.sessionStorageVerificationService.email;

  retryAfterSeconds = signal<number>(0);

  constructor() {
    handleApiResourceState(this.authService.resendVerificationCode.resource, {
      onSuccess: () => {
        this.flToastService.success(`global.validation.server_success.verification_code_sent_success`);
        this.verificationStatusService.setStatus(VerificationStatus.NOT_VERIFIED);
        this.retryAfterSeconds.set(0);
      },
      onError: (errorCode, error) => {
        if (errorCode) {
          this.flToastService.error(`global.validation.server_error.${errorCode}`);
        }
        this.retryAfterSeconds.set(error.error.retryAfterSeconds);
      },
      onReset: () => {
        this.authService.resendVerificationCode.reset();
      },
    });
  }

  resendVerificationCode(): void {
    const email = this.email();

    if (!email) {
      return;
    }

    this.authService.resendVerificationCode.execute({ email });
  }
}
