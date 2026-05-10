import { PasswordStrengthRule } from '@ui/fl-form/components/fl-form-password-strength/types/password-strength-rule';
import { PasswordStrength } from '@ui/fl-form/components/fl-form-password-strength/enums/password-strength';

const PASSWORD_STRENGTH_RULES: PasswordStrengthRule[] = [
  {
    test: (value) => value.length >= 8,
  },
  {
    test: (value) => value.length >= 12,
  },
  {
    test: (value) => /[a-z]/.test(value),
  },
  {
    test: (value) => /[A-Z]/.test(value),
  },
  {
    test: (value) => /\d/.test(value),
  },
  {
    test: (value) => /[^A-Za-z0-9]/.test(value),
  },
];

export function getPasswordStrengthScore(password: string): number {
  if (!password) {
    return 0;
  }

  return PASSWORD_STRENGTH_RULES.reduce((score, rule) => {
    return rule.test(password) ? score + 1 : score;
  }, 0);
}

export function getPasswordStrength(score: number): PasswordStrength {
  switch (true) {
    case score >= 6:
      return PasswordStrength.VERY_STRONG;

    case score >= 4:
      return PasswordStrength.STRONG;

    case score >= 2:
      return PasswordStrength.MEDIUM;

    default:
      return PasswordStrength.WEAK;
  }
}

export function getPasswordStrengthBars(strength: PasswordStrength): number {
  switch (strength) {
    case PasswordStrength.VERY_STRONG:
      return 4;

    case PasswordStrength.STRONG:
      return 3;

    case PasswordStrength.MEDIUM:
      return 2;

    case PasswordStrength.WEAK:
    default:
      return 1;
  }
}

export function getPasswordStrengthLabel(strength: PasswordStrength): string {
  switch (strength) {
    case PasswordStrength.VERY_STRONG:
      return 'global.passwordStrength.veryStrong';

    case PasswordStrength.STRONG:
      return 'global.passwordStrength.strong';

    case PasswordStrength.MEDIUM:
      return 'global.passwordStrength.medium';

    case PasswordStrength.WEAK:
    default:
      return 'global.passwordStrength.weak';
  }
}
