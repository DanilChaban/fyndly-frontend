import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ViewportService } from '@core/services/viewport.service';
import { FlLanguageSelectorComponent } from '@common/fl-language-selector/components/fl-language-selector/fl-language-selector.component';
import { PrivateHeaderSearchComponent } from '@private/components/common/header/private-header-search/private-header-search.component';
import { PrivateHeaderNotificationsComponent } from '@private/components/common/header/private-header-notifications/private-header-notifications.component';
import { PrivateHeaderProfileComponent } from '@private/components/common/header/private-header-profile/private-header-profile.component';
import { PrivateHeaderBurgerComponent } from '@private/components/common/header/private-header-burger/private-header-burger.component';
import { PrivateLogoComponent } from '@private/components/common/ui/private-logo/private-logo.component';
import { PrivateLogoutComponent } from '@private/components/common/ui/private-logout/private-logout.component';

@Component({
  selector: 'app-private-header',
  imports: [
    FlLanguageSelectorComponent,
    PrivateHeaderSearchComponent,
    PrivateHeaderNotificationsComponent,
    PrivateHeaderProfileComponent,
    PrivateHeaderBurgerComponent,
    PrivateLogoComponent,
    PrivateLogoutComponent,
  ],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateHeaderComponent {
  private readonly viewportService = inject(ViewportService);

  isTablet = this.viewportService.isTablet;
}
