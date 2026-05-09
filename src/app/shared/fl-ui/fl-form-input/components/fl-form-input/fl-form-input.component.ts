import { ChangeDetectionStrategy, Component, computed, forwardRef, input } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatFormFieldAppearance } from '@angular/material/form-field';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { InputType } from '@ui/fl-form-input/types/input-type';
import { BasicComponent } from '@ui/abstract/basic.component';

@Component({
  selector: 'fl-form-input',
  imports: [ReactiveFormsModule, MatInput, MatFormField],
  templateUrl: './fl-form-input.component.html',
  styleUrl: './fl-form-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FlFormInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlFormInputComponent extends BasicComponent implements ControlValueAccessor {
  type = input<InputType>('text');
  placeholder = input<string>('');
  appearance = input<MatFormFieldAppearance>('outline');
  label = input<string>('');

  inputId = computed(() => {
    return `fl-input-${this.formControlName()}`;
  });

  writeValue(): void {}

  registerOnChange(): void {}

  registerOnTouched(): void {}

  setDisabledState(): void {}
}
