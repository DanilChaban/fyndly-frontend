import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { LocalizedRouterService } from '@core/services/localized-router.service';
import { handleApiResourceState } from '@core/helpers/api/handle-api-resource-state';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';
import { AuthService } from '@auth/apis/auth.service';

@Component({
  selector: 'app-private-logout',
  imports: [TranslocoPipe, FlButtonComponent],
  templateUrl: './private-logout.component.html',
  styleUrl: './private-logout.component.scss',
  providers: [AuthService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateLogoutComponent {
  private readonly authService = inject(AuthService);
  private readonly localizedRouterService = inject(LocalizedRouterService);

  constructor() {
    handleApiResourceState(this.authService.logout.resource, {
      onSuccess: () => {
        void this.localizedRouterService.navigate(['sign-in']);
      },
      onReset: () => {
        this.authService.logout.reset();
      },
    });
  }

  logout(): void {
    this.authService.logout.execute();
  }
}
