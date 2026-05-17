import { ValidationErrors } from '@angular/forms';

const VALIDATION_ERROR_KEYS: Record<string, string> = {
  invalid: 'global.validation.invalid',
  required: 'global.validation.required',
  email: 'global.validation.email',
  minlength: 'global.validation.min_length',
  maxlength: 'global.validation.max_length',
  passwordMismatch: 'global.validation.password_mismatch',
};

export const getErrorKey = (errors: ValidationErrors | null): string | null => {
  if (!errors) {
    return null;
  }

  if (errors['server']) {
    return errors['server'];
  }

  const firstErrorKey = Object.keys(errors)[0];

  return VALIDATION_ERROR_KEYS[firstErrorKey];
};
