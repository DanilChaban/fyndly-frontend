import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { LocalizedRouterService } from '@core/services/localized-router.service';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';
import { SessionStorageVerificationService } from '@auth/services/session-storage-verification.service';

@Component({
  selector: 'app-auth-email-verification-actions-continue',
  imports: [FlButtonComponent, TranslocoPipe],
  templateUrl: './auth-email-verification-actions-continue.component.html',
  styleUrl: './auth-email-verification-actions-continue.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthEmailVerificationActionsContinueComponent {
  private readonly localizedRouterService = inject(LocalizedRouterService);
  private readonly sessionStorageVerificationService = inject(SessionStorageVerificationService);

  navigateToHome(): void {
    this.sessionStorageVerificationService.clearData();
    void this.localizedRouterService.navigate(['home']);
  }
}
