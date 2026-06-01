import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';
import { SidenavService } from '@private/services/sidenav.service';

@Component({
  selector: 'app-private-header-burger',
  imports: [FlButtonComponent],
  templateUrl: './private-header-burger.component.html',
  styleUrl: './private-header-burger.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateHeaderBurgerComponent {
  private readonly sidenavService = inject(SidenavService);

  lines = Array.from({ length: 3 }, (_, index) => index);

  opened = this.sidenavService.opened;

  toggleSidebarPanel(): void {
    this.sidenavService.toggle();
  }
}
