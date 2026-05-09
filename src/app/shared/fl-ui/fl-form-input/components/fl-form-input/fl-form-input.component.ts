import { ChangeDetectionStrategy, Component, computed, forwardRef, input, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatInput, MatPrefix, MatSuffix } from '@angular/material/input';
import { MatFormField, MatFormFieldAppearance } from '@angular/material/form-field';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { SvgIconName } from '@core/icons/types/svg-icon-name';
import { InputType } from '@ui/fl-form-input/types/input-type';
import { BasicComponent } from '@ui/abstract/basic.component';

@Component({
  selector: 'fl-form-input',
  imports: [ReactiveFormsModule, MatInput, MatFormField, MatIcon, MatPrefix, MatSuffix],
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
  prefixSvgIcon = input<SvgIconName | null>(null);
  suffixSvgIcon = input<SvgIconName | null>(null);

  inputId = computed(() => {
    return `fl-input-${this.formControlName()}`;
  });

  private readonly isPasswordVisible = signal<boolean>(false);

  currentInputType = computed<InputType>(() => {
    if (this.type() !== 'password') {
      return this.type();
    }

    return this.isPasswordVisible() ? 'text' : 'password';
  });

  currentSuffixIcon = computed(() => {
    if (this.type() === 'password') {
      return this.isPasswordVisible() ? 'eye' : 'eye-off';
    }

    return this.suffixSvgIcon();
  });

  onSuffixIconClick(): void {
    if (this.type() === 'password') {
      this.isPasswordVisible.update((value) => !value);
      return;
    }
  }

  writeValue(): void {}

  registerOnChange(): void {}

  registerOnTouched(): void {}

  setDisabledState(): void {}
}
