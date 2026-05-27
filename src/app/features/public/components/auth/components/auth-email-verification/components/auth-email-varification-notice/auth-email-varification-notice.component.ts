import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslocoPipe } from '@jsverse/transloco';
import { VerificationStatusService } from '@auth/components/auth-email-verification/services/verification-status.service';
import { VerificationStatus } from '@auth/components/auth-email-verification/enums/verification-status';

@Component({
  selector: 'app-auth-email-varification-notice',
  imports: [MatIcon, TranslocoPipe],
  templateUrl: './auth-email-varification-notice.component.html',
  styleUrl: './auth-email-varification-notice.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthEmailVarificationNoticeComponent {
  private readonly verificationStatusService = inject(VerificationStatusService);

  status = this.verificationStatusService.status;

  VerificationStatus = VerificationStatus;
}
