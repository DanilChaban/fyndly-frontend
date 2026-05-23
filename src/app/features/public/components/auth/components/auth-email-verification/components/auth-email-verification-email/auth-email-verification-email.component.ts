import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-auth-email-verification-email',
  imports: [MatIcon],
  templateUrl: './auth-email-verification-email.component.html',
  styleUrl: './auth-email-verification-email.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthEmailVerificationEmailComponent {}
