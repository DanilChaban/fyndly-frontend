import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlLanguageSelectorComponent } from '@common/fl-language-selector/components/fl-language-selector/fl-language-selector.component';
import { PrivateHeaderLogoComponent } from '@private/components/common/header/private-header-logo/private-header-logo.component';
import { PrivateHeaderSearchComponent } from '@private/components/common/header/private-header-search/private-header-search.component';
import { PrivateHeaderNotificationsComponent } from '@private/components/common/header/private-header-notifications/private-header-notifications.component';
import { PrivateHeaderProfileComponent } from '@private/components/common/header/private-header-profile/private-header-profile.component';
import { PrivateHeaderLogoutComponent } from '@private/components/common/header/private-header-logout/private-header-logout.component';

@Component({
  selector: 'app-private-header',
  imports: [
    FlLanguageSelectorComponent,
    PrivateHeaderLogoComponent,
    PrivateHeaderSearchComponent,
    PrivateHeaderNotificationsComponent,
    PrivateHeaderProfileComponent,
    PrivateHeaderLogoutComponent,
  ],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateHeaderComponent {}
