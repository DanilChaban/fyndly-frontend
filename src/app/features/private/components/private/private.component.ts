import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { ViewportService } from '@core/services/viewport.service';
import { PrivateHeaderComponent } from '@private/components/common/header/private-header/private-header.component';
import { SidenavService } from '@private/services/sidenav.service';
import { PrivateSidenavComponent } from '@private/components/common/sidenav/private-sidenav/private-sidenav.component';

@Component({
  selector: 'app-private',
  imports: [
    RouterOutlet,
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    PrivateHeaderComponent,
    PrivateSidenavComponent,
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

  sidenavChanged(opened: boolean): void {
    if (this.isTablet()) {
      this.sidenavService.open(opened);
    }
  }
}
