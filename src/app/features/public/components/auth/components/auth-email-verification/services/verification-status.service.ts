import { computed, inject, Injectable, signal } from '@angular/core';
import { VerificationStatus } from '@auth/components/auth-email-verification/enums/verification-status';
import { AuthSessionStorageVerificationService } from '@auth/services/auth-session-storage-verification.service';

@Injectable()
export class VerificationStatusService {
  private readonly authSessionStorageVerificationService = inject(AuthSessionStorageVerificationService);

  private verified = computed(() => {
    return this.authSessionStorageVerificationService.data()?.verified
      ? VerificationStatus.VERIFIED
      : VerificationStatus.NOT_VERIFIED;
  });

  private verificationStatus = signal<VerificationStatus>(this.verified());

  status = this.verificationStatus.asReadonly();

  setStatus(status: VerificationStatus): void {
    this.verificationStatus.set(status);
  }
}
