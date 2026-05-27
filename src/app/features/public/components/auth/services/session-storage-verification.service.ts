import { computed, Injectable, signal } from '@angular/core';
import { VerificationStorage } from '@auth/types/dto/verification-storage';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageVerificationService {
  private readonly VERIFICATION_EMAIL_KEY = 'verification_email';

  private data = signal<VerificationStorage | null>(this.getData());

  email = computed(() => this.data()?.email);
  verified = computed(() => this.data()?.verified);

  setData(email: string, verified = false): void {
    sessionStorage.setItem(this.VERIFICATION_EMAIL_KEY, JSON.stringify({ email, verified }));
    this.data.set({ email, verified });
  }

  getData(): VerificationStorage | null {
    const data = sessionStorage.getItem(this.VERIFICATION_EMAIL_KEY);
    return data ? JSON.parse(data) : null;
  }

  clearData(): void {
    sessionStorage.removeItem(this.VERIFICATION_EMAIL_KEY);
    this.data.set(null);
  }

  hasData(): boolean {
    return !!this.getData();
  }
}
