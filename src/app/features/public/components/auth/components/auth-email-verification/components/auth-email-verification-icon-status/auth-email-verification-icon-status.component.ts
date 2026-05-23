import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-auth-email-verification-icon-status',
  imports: [MatIcon],
  templateUrl: './auth-email-verification-icon-status.component.html',
  styleUrl: './auth-email-verification-icon-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthEmailVerificationIconStatusComponent {}
