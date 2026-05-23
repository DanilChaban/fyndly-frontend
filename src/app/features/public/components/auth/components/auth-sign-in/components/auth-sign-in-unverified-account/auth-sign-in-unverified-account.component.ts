import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslocoPipe } from '@jsverse/transloco';
import { handleApiResourceState } from '@core/helpers/api/handle-api-resource-state';
import { LocalizedRouterService } from '@core/services/localized-router.service';
import { FlToastService } from '@ui/fl-toast/services/fl-toast.service';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';
import { AuthService } from '@auth/apis/auth.service';
import { AuthSessionStorageVerificationService } from '@auth/services/auth-session-storage-verification.service';

@Component({
  selector: 'app-auth-sign-in-unverified-account',
  imports: [MatIcon, FlButtonComponent, TranslocoPipe],
  templateUrl: './auth-sign-in-unverified-account.component.html',
  styleUrl: './auth-sign-in-unverified-account.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSignInUnverifiedAccountComponent {
  private readonly localizedRouterService = inject(LocalizedRouterService);
  private readonly authService = inject(AuthService);
  private readonly authSessionStorageVerificationService = inject(AuthSessionStorageVerificationService);
  private readonly flToastService = inject(FlToastService);

  loading = this.authService.resendVerificationCode.resource.isLoading;

  email = computed(() => this.authSessionStorageVerificationService.data()?.email);

  retryAfterSeconds = signal<number>(0);

  constructor() {
    handleApiResourceState(this.authService.resendVerificationCode.resource, {
      onSuccess: () => {
        void this.localizedRouterService.navigate(['verify-email']);
      },
      onError: (errorCode, error) => {
        if (errorCode) {
          this.flToastService.error(`global.validation.server_error.${errorCode}`);
        }
        this.retryAfterSeconds.set(error.error.retryAfterSeconds);
      },
      onReset: () => {
        this.authService.resendVerificationCode.reset();
      },
    });
  }

  resendVerificationCode(): void {
    const email = this.email();

    if (!email) {
      return;
    }

    this.authService.resendVerificationCode.execute({ email });
  }
}
