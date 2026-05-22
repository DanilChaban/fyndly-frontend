export type ApiErrorCode =
  | 'validation_error'
  | 'validation_invalid'
  | 'validation_email'
  | 'validation_min_length'
  | 'request_body_required'
  | 'passwords_do_not_match'
  | 'email_already_exists'
  | 'username_already_exists'
  | 'invalid_credentials'
  | 'email_not_verified';
