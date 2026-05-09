import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ButtonAppearance } from '@angular/material/button/testing';

@Component({
  selector: 'fl-button',
  imports: [MatButton],
  templateUrl: './fl-button.component.html',
  styleUrl: './fl-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlButtonComponent {
  appearance = input<ButtonAppearance>('outlined');

  btnClicked = output<void>();

  onClick(): void {
    this.btnClicked.emit();
  }
}
