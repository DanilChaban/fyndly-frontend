import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { SessionStorageVerificationService } from '@auth/services/session-storage-verification.service';

@Component({
  selector: 'app-auth-email-verification-email',
  imports: [MatIcon],
  templateUrl: './auth-email-verification-email.component.html',
  styleUrl: './auth-email-verification-email.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthEmailVerificationEmailComponent {
  private readonly sessionStorageVerificationService = inject(SessionStorageVerificationService);

  email = this.sessionStorageVerificationService.email;
}
