import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatMenuItem } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { SvgIconName } from '@core/icons/types/svg-icon-name';

@Component({
  selector: 'fl-menu-item',
  imports: [MatMenuItem, MatIcon],
  templateUrl: './fl-menu-item.component.html',
  styleUrl: './fl-menu-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlMenuItemComponent {
  active = input<boolean>(false);
  disabled = input<boolean>(false);
  icon = input<SvgIconName | null>(null);

  itemClicked = output<void>();

  onClick(): void {
    if (this.disabled()) {
      return;
    }

    this.itemClicked.emit();
  }
}
