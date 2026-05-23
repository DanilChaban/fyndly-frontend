import { Injectable, signal } from '@angular/core';
import { VerificationStorage } from '@auth/types/verification-storage';

@Injectable({
  providedIn: 'root',
})
export class AuthSessionStorageVerificationService {
  private VERIFICATION_EMAIL_KEY = 'auth_verification_email';

  data = signal<VerificationStorage | null>(this.getVerificationData());

  setVerificationData(email: string, verified: boolean): void {
    sessionStorage.setItem(this.VERIFICATION_EMAIL_KEY, JSON.stringify({ email, verified }));
    this.data.set({ email, verified });
  }

  getVerificationData(): VerificationStorage | null {
    const data = sessionStorage.getItem(this.VERIFICATION_EMAIL_KEY);
    return data ? JSON.parse(data) : null;
  }

  clearVerificationData(): void {
    sessionStorage.removeItem(this.VERIFICATION_EMAIL_KEY);
    this.data.set(null);
  }
}
