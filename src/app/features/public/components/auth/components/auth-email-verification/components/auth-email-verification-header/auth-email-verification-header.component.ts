import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { FlCardSubtitleComponent } from '@common/fl-card/components/fl-card-subtitle/fl-card-subtitle.component';
import { FlCardTitleComponent } from '@common/fl-card/components/fl-card-title/fl-card-title.component';
import { FlCardHeaderComponent } from '@common/fl-card/components/fl-card-header/fl-card-header.component';
import { AuthEmailVerificationIconStatusComponent } from '@auth/components/auth-email-verification/components/auth-email-verification-icon-status/auth-email-verification-icon-status.component';
import { AuthEmailVerificationEmailComponent } from '@auth/components/auth-email-verification/components/auth-email-verification-email/auth-email-verification-email.component';
import { VerificationStatusService } from '@auth/components/auth-email-verification/services/verification-status.service';
import {
  VERIFICATION_STATUS_DESCRIPTION,
  VERIFICATION_STATUS_TITLE,
} from '@auth/components/auth-email-verification/constants/constants';
import { VerificationStatus } from '@auth/components/auth-email-verification/enums/verification-status';

@Component({
  selector: 'app-auth-email-verification-header',
  imports: [
    TranslocoPipe,
    FlCardSubtitleComponent,
    FlCardTitleComponent,
    FlCardHeaderComponent,
    AuthEmailVerificationIconStatusComponent,
    AuthEmailVerificationEmailComponent,
  ],
  templateUrl: './auth-email-verification-header.component.html',
  styleUrl: './auth-email-verification-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthEmailVerificationHeaderComponent {
  private readonly verificationStatusService = inject(VerificationStatusService);

  status = this.verificationStatusService.status;

  VerificationStatus = VerificationStatus;

  title = computed(() => VERIFICATION_STATUS_TITLE[this.status()]);
  description = computed(() => VERIFICATION_STATUS_DESCRIPTION[this.status()]);
}
