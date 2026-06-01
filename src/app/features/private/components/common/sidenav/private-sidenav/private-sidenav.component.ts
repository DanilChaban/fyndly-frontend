import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ViewportService } from '@core/services/viewport.service';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';
import { FlLanguageSelectorComponent } from '@common/fl-language-selector/components/fl-language-selector/fl-language-selector.component';
import { PrivateSidebarComponent } from '@private/components/common/sidebar/private-sidebar/private-sidebar.component';
import { SidenavService } from '@private/services/sidenav.service';
import { PrivateLogoComponent } from '@private/components/common/ui/private-logo/private-logo.component';
import { PrivateLogoutComponent } from '@private/components/common/ui/private-logout/private-logout.component';

@Component({
  selector: 'app-private-sidenav',
  imports: [
    FlButtonComponent,
    FlLanguageSelectorComponent,
    PrivateSidebarComponent,
    PrivateLogoComponent,
    PrivateLogoutComponent,
  ],
  templateUrl: './private-sidenav.component.html',
  styleUrl: './private-sidenav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateSidenavComponent {
  private readonly viewportService = inject(ViewportService);
  private readonly sidenavService = inject(SidenavService);

  isTablet = this.viewportService.isTablet;

  closeSidenav(): void {
    this.sidenavService.close();
  }
}
