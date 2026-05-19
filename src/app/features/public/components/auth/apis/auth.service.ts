import { Injectable } from '@angular/core';
import { createApiMutation } from '@core/helpers/api/api-mutation';
import { API_ENDPOINTS } from '@core/constants/api-endpoints';
import { SignInRequestDto } from '@auth/types/sign-in-request.dto';
import { SignUpRequestDto } from '@auth/types/sign-up-request.dto';

@Injectable()
export class AuthService {
  signIn = createApiMutation<SignInRequestDto>('POST', API_ENDPOINTS.auth.signIn);

  signUp = createApiMutation<SignUpRequestDto>('POST', API_ENDPOINTS.auth.signUp);
}
