import { ValidationErrors } from '@angular/forms';

const VALIDATION_ERROR_KEYS: Record<string, string> = {
  invalid: 'global.validation.invalid',
  required: 'global.validation.required',
  email: 'global.validation.email',
  minlength: 'global.validation.min_length',
  maxlength: 'global.validation.max_length',
  passwordMismatch: 'global.validation.password_mismatch',
  validationCode: 'invalid_verification_code',
};

export const getErrorKey = (errors: ValidationErrors | null): string | null => {
  if (!errors) {
    return null;
  }

  if (errors['server']) {
    return `global.validation.server_error.${errors['server']}`;
  }

  return VALIDATION_ERROR_KEYS[Object.keys(errors)[0]];
};
