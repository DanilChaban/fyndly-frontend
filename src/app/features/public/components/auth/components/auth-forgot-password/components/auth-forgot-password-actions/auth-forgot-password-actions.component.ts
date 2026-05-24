import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { LocalizedRouterService } from '@core/services/localized-router.service';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

@Component({
  selector: 'app-auth-forgot-password-actions',
  imports: [TranslocoPipe, FlButtonComponent],
  templateUrl: './auth-forgot-password-actions.component.html',
  styleUrl: './auth-forgot-password-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthForgotPasswordActionsComponent {
  private readonly localizedRouterService = inject(LocalizedRouterService);

  navigateToSignIn(): void {
    this.localizedRouterService.navigate(['sign-in']);
  }
}
