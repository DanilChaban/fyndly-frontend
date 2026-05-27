import { ChangeDetectorRef, computed, DestroyRef, Directive, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroupDirective } from '@angular/forms';
import { getErrorKey } from '@ui/abstract/fl-form-control-base/constants/constants';

@Directive()
export abstract class FlFormControlBase {
  formControlName = input.required<string>();

  private readonly rootFormGroup = inject(FormGroupDirective);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly destroyRef = inject(DestroyRef);

  control = computed(() => {
    return this.rootFormGroup.form.get(this.formControlName()) as FormControl;
  });

  invalid(): boolean {
    const control = this.control();
    return control.invalid && (control.dirty || control.touched);
  }

  disabled(): boolean {
    return this.control().disabled;
  }

  errorKey(): string | null {
    return getErrorKey(this.control().errors);
  }

  showError(): boolean {
    return this.invalid() && !!this.errorKey();
  }

  markForCheckOnControlStatusChange(): void {
    this.control()
      .statusChanges.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.changeDetectorRef.markForCheck();
      });
  }
}
