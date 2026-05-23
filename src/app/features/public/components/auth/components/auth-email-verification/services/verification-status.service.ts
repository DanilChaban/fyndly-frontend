import { Injectable, signal } from '@angular/core';
import { VerificationStatus } from '@auth/components/auth-email-verification/enums/verification-status';

@Injectable()
export class VerificationStatusService {
  private verificationStatus = signal<VerificationStatus>(VerificationStatus.VERIFIED);

  status = this.verificationStatus.asReadonly();

  setStatus(status: VerificationStatus): void {
    this.verificationStatus.set(status);
  }
}
