import { ChangeDetectionStrategy, Component, input, ViewChild } from '@angular/core';
import { MatMenu, MenuPositionX, MenuPositionY } from '@angular/material/menu';

@Component({
  selector: 'fl-menu',
  imports: [MatMenu],
  templateUrl: './fl-menu.component.html',
  styleUrl: './fl-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlMenuComponent {
  @ViewChild(MatMenu, { static: true })
  readonly menu!: MatMenu;

  xPosition = input<MenuPositionX>('after');
  yPosition = input<MenuPositionY>('below');
  panelClass = input<string>('fl-menu-panel');
}
