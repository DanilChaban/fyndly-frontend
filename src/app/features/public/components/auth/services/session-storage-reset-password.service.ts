import { computed, Injectable, signal } from '@angular/core';
import { ResetPasswordStorage } from '@auth/types/reset-password-storage';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageResetPasswordService {
  private RESET_PASSWORD_EMAIL_KEY = 'reset_password_email';

  private data = signal<ResetPasswordStorage | null>(null);

  email = computed(() => this.data()?.email);
  passwordUpdated = computed(() => this.data()?.passwordUpdated);

  setData(email: string, passwordUpdated = false): void {
    sessionStorage.setItem(this.RESET_PASSWORD_EMAIL_KEY, JSON.stringify({ email, passwordUpdated }));
    this.data.set({ email, passwordUpdated });
  }

  getData(): ResetPasswordStorage | null {
    const data = sessionStorage.getItem(this.RESET_PASSWORD_EMAIL_KEY);
    return data ? JSON.parse(data) : null;
  }

  clearData(): void {
    sessionStorage.removeItem(this.RESET_PASSWORD_EMAIL_KEY);
    this.data.set(null);
  }

  hasData(): boolean {
    return !!this.getData();
  }
}
