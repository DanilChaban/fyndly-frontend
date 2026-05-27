import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';
import { SvgIconName } from '@core/icons/types/svg-icon-name';

@Component({
  selector: 'app-auth-ui-icon-status',
  imports: [MatIcon, NgClass],
  templateUrl: './auth-ui-icon-status.component.html',
  styleUrl: './auth-ui-icon-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthUiIconStatusComponent {
  iconName = input<SvgIconName | null>(null);
  iconClass = input<Record<string, boolean>>({});
}
