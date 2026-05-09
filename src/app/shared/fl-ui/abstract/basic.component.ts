import { Component, computed, inject, input } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';

@Component({ template: '' })
export abstract class BasicComponent {
  formControlName = input.required<string>();

  private readonly rootFormGroup = inject(FormGroupDirective);

  control = computed(() => {
    return this.rootFormGroup.form.get(this.formControlName()) as FormControl;
  });

  invalid = computed(() => {
    return this.control().dirty && this.control().invalid;
  });

  disabled = computed(() => {
    return this.control().disabled;
  });
}
