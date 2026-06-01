import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FlButtonComponent } from '@ui/fl-button/components/fl-button/fl-button.component';

@Component({
  selector: 'app-private-header-burger',
  imports: [FlButtonComponent],
  templateUrl: './private-header-burger.component.html',
  styleUrl: './private-header-burger.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivateHeaderBurgerComponent {
  lines = Array.from({ length: 3 }, (_, index) => index);

  isSidebarOpened = signal(false);

  toggleSidebarPanel(): void {
    this.isSidebarOpened.update((value) => !value);
  }
}
