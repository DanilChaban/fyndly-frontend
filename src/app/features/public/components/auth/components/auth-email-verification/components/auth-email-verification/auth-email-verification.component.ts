import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { handleApiResourceState } from '@core/helpers/api/handle-api-resource-state';
import { setServerValidationErrors } from '@core/helpers/set-server-validation-errors';
import { ApiErrorCode } from '@core/types/api/api-error-code';
import { FlToastService } from '@ui/fl-toast/services/fl-toast.service';
import { FlCardComponent } from '@common/fl-card/components/fl-card/fl-card.component';
import { FlCardContentComponent } from '@common/fl-card/components/fl-card-content/fl-card-content.component';
import { AuthEmailVerificationFormComponent } from '@auth/components/auth-email-verification/components/forms/auth-email-verification-form/auth-email-verification-form.component';
import { AuthEmailVerificationResendCodeComponent } from '@auth/components/auth-email-verification/components/auth-email-verification-resend-code/auth-email-verification-resend-code.component';
import { AuthEmailVarificationNoticeComponent } from '@auth/components/auth-email-verification/components/auth-email-varification-notice/auth-email-varification-notice.component';
import { AuthService } from '@auth/apis/auth.service';
import { VerificationStatusService } from '@auth/components/auth-email-verification/services/verification-status.service';
import { VerificationStatus } from '@auth/components/auth-email-verification/enums/verification-status';
import { AuthEmailVerificationHeaderComponent } from '@auth/components/auth-email-verification/components/auth-email-verification-header/auth-email-verification-header.component';
import { AuthEmailVerificationActionsContinueComponent } from '@auth/components/auth-email-verification/components/actions/auth-email-verification-actions-continue/auth-email-verification-actions-continue.component';
import { SessionStorageVerificationService } from '@auth/services/session-storage-verification.service';

@Component({
  selector: 'app-auth-email-verification',
  imports: [
    FlCardComponent,
    FlCardContentComponent,
    AuthEmailVerificationFormComponent,
    AuthEmailVerificationResendCodeComponent,
    AuthEmailVarificationNoticeComponent,
    AuthEmailVerificationHeaderComponent,
    AuthEmailVerificationActionsContinueComponent,
  ],
  templateUrl: './auth-email-verification.component.html',
  styleUrl: './auth-email-verification.component.scss',
  providers: [VerificationStatusService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthEmailVerificationComponent {
  private readonly authService = inject(AuthService);
  private readonly sessionStorageVerificationService = inject(SessionStorageVerificationService);
  private readonly flToastService = inject(FlToastService);
  private readonly verificationStatusService = inject(VerificationStatusService);

  email = this.sessionStorageVerificationService.email;
  status = this.verificationStatusService.status;

  private form: FormGroup = new FormGroup({});

  VerificationStatus = VerificationStatus;

  constructor() {
    handleApiResourceState(this.authService.verifyEmail.resource, {
      onSuccess: () => {
        const email = this.email();
        if (!email) {
          return;
        }

        this.changeVerificationStatus();
        this.sessionStorageVerificationService.setData(email, true);
        this.flToastService.success(`global.validation.server_success.email_verified_success`);
      },
      onError: (_, error) => {
        const message = error.error.message;
        if (message) {
          this.changeVerificationStatus(message);
        } else {
          setServerValidationErrors(this.form, error.error.fields);
        }
      },
      onReset: () => {
        this.authService.verifyEmail.reset();
      },
    });
  }

  verifyEmail(form: FormGroup): void {
    const email = this.email();
    const code = form.get('code')?.value;

    this.form = form;

    if (!email) {
      return;
    }

    this.authService.verifyEmail.execute({ email, code });
  }

  private changeVerificationStatus(errorCode?: ApiErrorCode): void {
    if (!errorCode) {
      this.verificationStatusService.setStatus(VerificationStatus.VERIFIED);
      return;
    }

    if (errorCode === 'verification_code_expired') {
      this.verificationStatusService.setStatus(VerificationStatus.EXPIRED);
      return;
    }

    this.verificationStatusService.setStatus(VerificationStatus.NOT_VERIFIED);
  }
}
