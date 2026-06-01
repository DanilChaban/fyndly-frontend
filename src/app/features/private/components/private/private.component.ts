import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { ViewportService } from '@core/services/viewport.service';
import { PrivateHeaderComponent } from '@private/components/common/header/private-header/private-header.component';
import { PrivateSidebarComponent } from '@private/components/common/sidebar/private-sidebar/private-sidebar.component';
import { SidenavService } from '@private/services/sidenav.service';

@Component({
  selector: 'app-private',
  imports: [
    RouterOutlet,
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    PrivateHeaderComponent,
    PrivateSidebarComponent,
  ],
  templateUrl: './private.component.html',
  styleUrl: './private.component.scss',
  providers: [SidenavService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateComponent {
  private readonly viewportService = inject(ViewportService);
  private readonly sidenavService = inject(SidenavService);

  isTablet = this.viewportService.isTablet;
  opened = this.sidenavService.opened;

  setSidebarOpened(opened: boolean): void {
    if (this.isTablet()) {
      this.sidenavService.open(opened);
    }
  }
}
