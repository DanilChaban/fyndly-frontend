import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { VERIFICATION_STATUS_ICON } from '@auth/components/auth-email-verification/constants/constants';
import { VerificationStatusService } from '@auth/components/auth-email-verification/services/verification-status.service';

@Component({
  selector: 'app-auth-email-verification-icon-status',
  imports: [MatIcon, NgClass],
  templateUrl: './auth-email-verification-icon-status.component.html',
  styleUrl: './auth-email-verification-icon-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthEmailVerificationIconStatusComponent {
  private readonly verificationStatusService = inject(VerificationStatusService);

  status = this.verificationStatusService.status;

  iconClass = computed(() => ({
    [`auth-email-verification-icon-status auth-email-verification-icon-status--${this.status()}`]: true,
  }));

  iconName = computed(() => VERIFICATION_STATUS_ICON[this.status()]);
}
