import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { TranslocoPipe } from '@jsverse/transloco';
import { LocalizedRouterService } from '@core/services/localized-router.service';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

@Component({
  selector: 'app-auth-sign-in-unverified-account',
  imports: [MatIcon, FlButtonComponent, TranslocoPipe],
  templateUrl: './auth-sign-in-unverified-account.component.html',
  styleUrl: './auth-sign-in-unverified-account.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSignInUnverifiedAccountComponent {
  private readonly localizedRouterService = inject(LocalizedRouterService);

  navigateToVerifyEmail(): void {
    void this.localizedRouterService.navigate(['verify-email']);
  }
}
