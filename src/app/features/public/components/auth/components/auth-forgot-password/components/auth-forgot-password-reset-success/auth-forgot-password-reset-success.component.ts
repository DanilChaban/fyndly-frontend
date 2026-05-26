import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { LocalizedRouterService } from '@core/services/localized-router.service';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';
import { FlCardHeaderComponent } from '@common/fl-card/components/fl-card-header/fl-card-header.component';
import { FlCardSubtitleComponent } from '@common/fl-card/components/fl-card-subtitle/fl-card-subtitle.component';
import { FlCardTitleComponent } from '@common/fl-card/components/fl-card-title/fl-card-title.component';
import { FlCardComponent } from '@common/fl-card/components/fl-card/fl-card.component';
import { FlCardActionsComponent } from '@common/fl-card/components/fl-card-actions/fl-card-actions.component';
import { AuthForgotPasswordIconStatusComponent } from '@auth/components/auth-forgot-password/components/auth-forgot-password-icon-status/auth-forgot-password-icon-status.component';

@Component({
  selector: 'app-auth-forgot-password-reset-success',
  imports: [
    TranslocoPipe,
    FlCardComponent,
    FlCardActionsComponent,
    FlButtonComponent,
    FlCardHeaderComponent,
    FlCardSubtitleComponent,
    FlCardTitleComponent,
    AuthForgotPasswordIconStatusComponent,
  ],
  templateUrl: './auth-forgot-password-reset-success.component.html',
  styleUrl: './auth-forgot-password-reset-success.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthForgotPasswordResetSuccessComponent {
  private readonly localizedRouterService = inject(LocalizedRouterService);

  navigateToSignIn(): void {
    void this.localizedRouterService.navigate(['sign-in']);
  }
}
