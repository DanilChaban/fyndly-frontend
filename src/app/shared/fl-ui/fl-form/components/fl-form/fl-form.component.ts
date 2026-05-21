import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'fl-form',
  imports: [FormsModule],
  templateUrl: './fl-form.component.html',
  styleUrl: './fl-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlFormComponent {
  submitOnEnter = output<void>();
}
