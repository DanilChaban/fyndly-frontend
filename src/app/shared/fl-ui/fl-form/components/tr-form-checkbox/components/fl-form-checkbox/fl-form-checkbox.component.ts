import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BasicComponent } from '@ui/abstract/basic.component';

@Component({
  selector: 'fl-form-checkbox',
  imports: [MatCheckbox, ReactiveFormsModule],
  templateUrl: './fl-form-checkbox.component.html',
  styleUrl: './fl-form-checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FlFormCheckboxComponent),
      multi: true,
    },
  ],
})
export class FlFormCheckboxComponent extends BasicComponent {
  writeValue(): void {}

  registerOnChange(): void {}

  registerOnTouched(): void {}

  setDisabledState(): void {}
}
