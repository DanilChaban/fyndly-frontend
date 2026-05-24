import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { handleApiResourceState } from '@core/helpers/api/handle-api-resource-state';
import { LocalizedRouterService } from '@core/services/localized-router.service';
import { FlToastService } from '@ui/fl-toast/services/fl-toast.service';
import { FlCardActionsComponent } from '@common/fl-card/components/fl-card-actions/fl-card-actions.component';
import { FlCardComponent } from '@common/fl-card/components/fl-card/fl-card.component';
import { FlCardContentComponent } from '@common/fl-card/components/fl-card-content/fl-card-content.component';
import { AuthForgotPasswordFormComponent } from '@auth/components/auth-forgot-password/components/forms/auth-forgot-password-form/auth-forgot-password-form.component';
import { AuthForgotPasswordHeaderComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-header/auth-forgot-password-header.component';
import { AuthForgotPasswordActionsComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-actions/auth-forgot-password-actions.component';
import { AuthService } from '@auth/apis/auth.service';

@Component({
  selector: 'app-auth-forgot-password',
  imports: [
    FlCardActionsComponent,
    FlCardComponent,
    FlCardContentComponent,
    AuthForgotPasswordFormComponent,
    AuthForgotPasswordHeaderComponent,
    AuthForgotPasswordActionsComponent,
  ],
  templateUrl: './auth-forgot-password.component.html',
  styleUrl: './auth-forgot-password.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthForgotPasswordComponent {
  private readonly authService = inject(AuthService);
  private readonly flToastService = inject(FlToastService);
  private readonly localizedRouterService = inject(LocalizedRouterService);

  retryAfterSeconds = signal(0);

  constructor() {
    handleApiResourceState(this.authService.forgotPassword.resource, {
      onSuccess: () => {
        this.flToastService.success(`global.validation.server_success.forgot_password_success`);
        void this.localizedRouterService.navigate(['reset-password']);
        this.retryAfterSeconds.set(0);
      },
      onError: (errorCode, error) => {
        if (errorCode) {
          this.flToastService.error(`global.validation.server_error.${errorCode}`);
        }

        this.retryAfterSeconds.set(error.error.retryAfterSeconds ?? 0);
      },
      onReset: () => {
        this.authService.forgotPassword.reset();
      },
    });
  }

  onSubmit(email: string): void {
    this.authService.forgotPassword.execute({ email });
  }
}
