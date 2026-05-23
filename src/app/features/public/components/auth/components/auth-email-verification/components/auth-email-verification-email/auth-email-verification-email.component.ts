import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { AuthSessionStorageEmailService } from '@auth/services/auth-session-storage-email.service';

@Component({
  selector: 'app-auth-email-verification-email',
  imports: [MatIcon],
  templateUrl: './auth-email-verification-email.component.html',
  styleUrl: './auth-email-verification-email.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthEmailVerificationEmailComponent {
  private readonly authSessionStorageEmailService = inject(AuthSessionStorageEmailService);

  email = computed(() => this.authSessionStorageEmailService.verificationEmail());
}
