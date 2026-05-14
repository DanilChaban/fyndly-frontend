import { Injectable } from '@angular/core';
import { createApiMutation } from '@core/helpers/api-mutation';
import { API_ENDPOINTS } from '@core/constants/api-endpoints';

@Injectable()
export class AuthService {
  signIn = createApiMutation('POST', API_ENDPOINTS.auth.signIn);

  signUp = createApiMutation('POST', API_ENDPOINTS.auth.signUp);
}
