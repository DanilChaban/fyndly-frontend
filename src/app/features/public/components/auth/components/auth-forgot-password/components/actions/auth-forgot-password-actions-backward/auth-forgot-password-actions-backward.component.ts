import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { LocalizedRouterService } from '@core/services/localized-router.service';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

@Component({
  selector: 'app-auth-forgot-password-actions-backward',
  imports: [TranslocoPipe, FlButtonComponent],
  templateUrl: './auth-forgot-password-actions-backward.component.html',
  styleUrl: './auth-forgot-password-actions-backward.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthForgotPasswordActionsBackwardComponent {
  private readonly localizedRouterService = inject(LocalizedRouterService);

  navigateToSignIn(): void {
    void this.localizedRouterService.navigate(['sign-in']);
  }
}
