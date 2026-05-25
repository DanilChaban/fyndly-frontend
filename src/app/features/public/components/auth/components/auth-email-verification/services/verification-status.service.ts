import { computed, inject, Injectable, signal } from '@angular/core';
import { VerificationStatus } from '@auth/components/auth-email-verification/enums/verification-status';
import { SessionStorageVerificationService } from '@auth/services/session-storage-verification.service';

@Injectable()
export class VerificationStatusService {
  private readonly sessionStorageVerificationService = inject(SessionStorageVerificationService);

  private verified = computed(() => {
    return this.sessionStorageVerificationService.verified()
      ? VerificationStatus.VERIFIED
      : VerificationStatus.NOT_VERIFIED;
  });

  private verificationStatus = signal<VerificationStatus>(this.verified());

  status = this.verificationStatus.asReadonly();

  setStatus(status: VerificationStatus): void {
    this.verificationStatus.set(status);
  }
}
