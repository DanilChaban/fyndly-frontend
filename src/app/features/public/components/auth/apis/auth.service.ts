import { Injectable } from '@angular/core';
import { createApiMutation } from '@core/helpers/api/api-mutation';
import { API_ENDPOINTS } from '@core/constants/api-endpoints';
import { SignInRequestDto } from '@auth/types/sign-in-request.dto';
import { SignUpRequestDto } from '@auth/types/sign-up-request.dto';
import { ResendVerificationCodeDto } from '@auth/types/resend-verification-code.dto';
import { VerifyEmailDto } from '@auth/types/verify-email.dto';
import { ForgotPasswordDto } from '@auth/types/forgot-password.dto';
import { ResetPasswordDto } from '@auth/types/reset-password.dto';

@Injectable()
export class AuthService {
  signIn = createApiMutation<SignInRequestDto>('POST', API_ENDPOINTS.auth.signIn);

  signUp = createApiMutation<SignUpRequestDto>('POST', API_ENDPOINTS.auth.signUp);

  resendVerificationCode = createApiMutation<ResendVerificationCodeDto>(
    'POST',
    API_ENDPOINTS.auth.resendVerificationCode,
  );

  verifyEmail = createApiMutation<VerifyEmailDto>('POST', API_ENDPOINTS.auth.verifyEmail);

  forgotPassword = createApiMutation<ForgotPasswordDto>('POST', API_ENDPOINTS.auth.forgotPassword);

  resetPassword = createApiMutation<ResetPasswordDto>('POST', API_ENDPOINTS.auth.resetPassword);

  resendResendPasswordCode = createApiMutation<ForgotPasswordDto>('POST', API_ENDPOINTS.auth.resendResetPasswordCode);
}
