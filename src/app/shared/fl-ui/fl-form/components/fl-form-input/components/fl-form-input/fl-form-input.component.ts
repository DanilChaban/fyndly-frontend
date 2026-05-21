import { ChangeDetectionStrategy, Component, computed, forwardRef, input, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatError, MatInput, MatPrefix, MatSuffix } from '@angular/material/input';
import { MatFormField, MatFormFieldAppearance } from '@angular/material/form-field';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { TranslocoPipe } from '@jsverse/transloco';
import { SvgIconName } from '@core/icons/types/svg-icon-name';
import { InputType } from '@ui/fl-form/components/fl-form-input/types/input-type';
import { FlFormControlBase } from '@ui/abstract/fl-form-control-base/fl-form-control-base';

@Component({
  selector: 'fl-form-input',
  imports: [ReactiveFormsModule, MatInput, MatFormField, MatIcon, MatPrefix, MatSuffix, MatError, TranslocoPipe],
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
export class FlFormInputComponent extends FlFormControlBase implements ControlValueAccessor {
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
