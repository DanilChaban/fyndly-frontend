import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

@Component({
  selector: 'app-auth-forgot-password-resend-code',
  imports: [TranslocoPipe, FlButtonComponent],
  templateUrl: './auth-forgot-password-resend-code.component.html',
  styleUrl: './auth-forgot-password-resend-code.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthForgotPasswordResendCodeComponent {
  resendCode(): void {}
}
