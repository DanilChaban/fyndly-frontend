import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { FlCardComponent } from '@common/fl-card/components/fl-card/fl-card.component';
import { FlCardContentComponent } from '@common/fl-card/components/fl-card-content/fl-card-content.component';
import { FlCardHeaderComponent } from '@common/fl-card/components/fl-card-header/fl-card-header.component';
import { FlCardSubtitleComponent } from '@common/fl-card/components/fl-card-subtitle/fl-card-subtitle.component';
import { FlCardTitleComponent } from '@common/fl-card/components/fl-card-title/fl-card-title.component';
import { AuthEmailVerificationFormComponent } from '@auth/components/auth-email-verification/components/forms/auth-email-verification-form/auth-email-verification-form.component';
import { AuthEmailVerificationIconStatusComponent } from '@auth/components/auth-email-verification/components/auth-email-verification-icon-status/auth-email-verification-icon-status.component';
import { AuthEmailVerificationEmailComponent } from '@auth/components/auth-email-verification/components/auth-email-verification-email/auth-email-verification-email.component';
import { AuthEmailVerificationResendCodeComponent } from '@auth/components/auth-email-verification/components/auth-email-verification-resend-code/auth-email-verification-resend-code.component';
import { AuthEmailVarificationNoticeComponent } from '@auth/components/auth-email-verification/components/auth-email-varification-notice/auth-email-varification-notice.component';

@Component({
  selector: 'app-auth-email-verification',
  imports: [
    TranslocoPipe,
    FlCardComponent,
    FlCardContentComponent,
    FlCardHeaderComponent,
    FlCardSubtitleComponent,
    FlCardTitleComponent,
    AuthEmailVerificationFormComponent,
    AuthEmailVerificationIconStatusComponent,
    AuthEmailVerificationEmailComponent,
    AuthEmailVerificationResendCodeComponent,
    AuthEmailVarificationNoticeComponent,
  ],
  templateUrl: './auth-email-verification.component.html',
  styleUrl: './auth-email-verification.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthEmailVerificationComponent {}
