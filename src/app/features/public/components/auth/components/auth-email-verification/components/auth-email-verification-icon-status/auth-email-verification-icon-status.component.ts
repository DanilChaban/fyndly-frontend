import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { VERIFICATION_STATUS_ICON } from '@auth/components/auth-email-verification/constants/constants';
import { VerificationStatusService } from '@auth/components/auth-email-verification/services/verification-status.service';
import { AuthUiIconStatusComponent } from '@auth/common/ui/auth-ui-icon-status/auth-ui-icon-status.component';

@Component({
  selector: 'app-auth-email-verification-icon-status',
  imports: [AuthUiIconStatusComponent],
  templateUrl: './auth-email-verification-icon-status.component.html',
  styleUrl: './auth-email-verification-icon-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthEmailVerificationIconStatusComponent {
  private readonly verificationStatusService = inject(VerificationStatusService);

  status = this.verificationStatusService.status;

  iconClass = computed(() => ({
    [`auth-ui-icon-status--${this.status()}`]: true,
  }));

  iconName = computed(() => VERIFICATION_STATUS_ICON[this.status()]);
}
