import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { LocalizedRouterService } from '@core/services/localized-router.service';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';
import { AuthSessionStorageVerificationService } from '@auth/services/auth-session-storage-verification.service';

@Component({
  selector: 'app-auth-email-verification-actions-continue',
  imports: [FlButtonComponent, TranslocoPipe],
  templateUrl: './auth-email-verification-actions-continue.component.html',
  styleUrl: './auth-email-verification-actions-continue.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthEmailVerificationActionsContinueComponent {
  private readonly localizedRouterService = inject(LocalizedRouterService);
  private readonly authSessionStorageVerificationService = inject(AuthSessionStorageVerificationService);

  navigateToHome(): void {
    this.authSessionStorageVerificationService.clearVerificationData();
    void this.localizedRouterService.navigate(['home']);
  }
}
