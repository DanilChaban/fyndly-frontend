import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '@core/constants/api-endpoints';
import { apiGetResource } from '@core/helpers/api/api-get-resource';
import { User } from '@core/types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  me = apiGetResource<User>(() => API_ENDPOINTS.user.me);
}
