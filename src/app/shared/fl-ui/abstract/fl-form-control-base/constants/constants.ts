import { ValidationErrors } from '@angular/forms';

const VALIDATION_ERROR_KEYS: Record<string, string> = {
  invalid: 'validation.invalid',
  required: 'validation.required',
  email: 'validation.email',
  minlength: 'validation.minLength',
  maxlength: 'validation.maxLength',
  passwordStrength: 'validation.passwordStrength',
  passwordMismatch: 'validation.passwordMismatch',
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
