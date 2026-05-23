import { SvgIconName } from '@core/icons/types/svg-icon-name';
import { VerificationStatus } from '@auth/components/auth-email-verification/enums/verification-status';

export const VERIFICATION_STATUS_ICON: Record<VerificationStatus, SvgIconName> = {
  [VerificationStatus.NOT_VERIFIED]: 'email-blue',
  [VerificationStatus.EXPIRED]: 'clock-orange',
  [VerificationStatus.VERIFIED]: 'checkmark-green',
};

export const VERIFICATION_STATUS_TITLE: Record<VerificationStatus, string> = {
  [VerificationStatus.NOT_VERIFIED]: 'auth.email_verification.title',
  [VerificationStatus.EXPIRED]: 'auth.email_verification.expired_title',
  [VerificationStatus.VERIFIED]: 'auth.email_verification.verified_title',
};

export const VERIFICATION_STATUS_DESCRIPTION: Record<VerificationStatus, string> = {
  [VerificationStatus.NOT_VERIFIED]: 'auth.email_verification.description',
  [VerificationStatus.EXPIRED]: 'auth.email_verification.expired_description',
  [VerificationStatus.VERIFIED]: 'auth.email_verification.verified_description',
};
