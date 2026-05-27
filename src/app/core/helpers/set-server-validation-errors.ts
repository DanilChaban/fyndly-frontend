import { FormGroup } from '@angular/forms';
import { ServerValidationErrors } from '@core/types/api/api-server-validation-error';

export function setServerValidationErrors(form: FormGroup, errors: ServerValidationErrors): void {
  errors.forEach(({ field, code }) => {
    const control = form.get(field);

    if (!control) {
      return;
    }

    control.setErrors({
      ...control.errors,
      server: code,
    });

    control.markAsTouched();
  });
}
