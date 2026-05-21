export interface PasswordStrengthRule {
  test: (value: string) => boolean;
}
