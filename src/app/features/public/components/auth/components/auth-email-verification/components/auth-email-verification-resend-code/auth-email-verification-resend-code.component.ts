import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

@Component({
  selector: 'app-auth-email-verification-resend-code',
  imports: [FlButtonComponent, TranslocoPipe],
  templateUrl: './auth-email-verification-resend-code.component.html',
  styleUrl: './auth-email-verification-resend-code.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthEmailVerificationResendCodeComponent {}
