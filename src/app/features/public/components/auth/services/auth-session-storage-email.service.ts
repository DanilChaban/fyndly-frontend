import { Injectable, signal } from '@angular/core';

@Injectable()
export class AuthSessionStorageEmailService {
  private VERIFICATION_EMAIL_KEY = 'auth_verification_email';

  verificationEmail = signal<string | null>(this.getVerificationEmail());

  setVerificationEmail(email: string): void {
    sessionStorage.setItem(this.VERIFICATION_EMAIL_KEY, email);
    this.verificationEmail.set(email);
  }

  getVerificationEmail(): string | null {
    return sessionStorage.getItem(this.VERIFICATION_EMAIL_KEY);
  }

  clearVerificationEmail(): void {
    sessionStorage.removeItem(this.VERIFICATION_EMAIL_KEY);
    this.verificationEmail.set(null);
  }
}
