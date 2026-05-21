import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatButtonAppearance } from '@angular/material/button';
import { SvgIconName } from '@core/icons/types/svg-icon-name';
import { ButtonVariant } from '@ui/fl-button/types/button-variant';
import { ButtonSize } from '@ui/fl-button/types/button-size';
import { ButtonType } from '@ui/fl-button/types/button-type';

@Component({
  selector: 'fl-button',
  imports: [MatButton, NgClass, MatIcon],
  templateUrl: './fl-button.component.html',
  styleUrl: './fl-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlButtonComponent {
  appearance = input<MatButtonAppearance>('text');
  variant = input<ButtonVariant>('primary');
  disabled = input<boolean>(false);
  customStyles = input<string>('');
  type = input<ButtonType>('button');
  prefixIcon = input<SvgIconName | null>(null);
  suffixIcon = input<SvgIconName | null>(null);
  size = input<ButtonSize>('large');

  btnClicked = output<void>();

  buttonClass = computed(() => ({
    [`fl-button fl-button--${this.variant()}`]: true,
    [`fl-button fl-button--${this.size()}`]: true,
  }));

  onClick(): void {
    if (this.disabled()) {
      return;
    }

    this.btnClicked.emit();
  }
}
