import { computed, Directive, inject, input } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { getErrorKey } from '@ui/abstract/fl-form-control-base/constants/constants';

@Directive()
export abstract class FlFormControlBase {
  formControlName = input.required<string>();

  private readonly rootFormGroup = inject(FormGroupDirective);

  control = computed(() => {
    return this.rootFormGroup.form.get(this.formControlName()) as FormControl;
  });

  invalid(): boolean {
    const control = this.control();
    return control.invalid && (control.dirty || control.touched);
  }

  disabled = computed(() => {
    return this.control().disabled;
  });

  errorKey(): string | null {
    return getErrorKey(this.control().errors);
  }

  showError(): boolean {
    return this.invalid() && !!this.errorKey();
  }
}
