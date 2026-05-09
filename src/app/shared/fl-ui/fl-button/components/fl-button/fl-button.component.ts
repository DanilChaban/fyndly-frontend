import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { NgClass } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { ButtonAppearance } from '@angular/material/button/testing';
import { ButtonVariant } from '@ui/fl-button/types/button-variant';

@Component({
  selector: 'fl-button',
  imports: [MatButton, NgClass],
  templateUrl: './fl-button.component.html',
  styleUrl: './fl-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlButtonComponent {
  appearance = input<ButtonAppearance>('outlined');
  variant = input<ButtonVariant>('primary');
  disabled = input<boolean>(false);

  btnClicked = output<void>();

  buttonClass = computed(() => `fl-button fl-button--${this.variant()}`);

  onClick(): void {
    if (this.disabled()) {
      return;
    }

    this.btnClicked.emit();
  }
}
