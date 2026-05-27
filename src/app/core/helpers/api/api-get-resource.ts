import { httpResource, HttpResourceRef } from '@angular/common/http';
import { apiUrl } from '@core/helpers/api/api-url';

export function apiGetResource<TResponse>(pathFactory: () => string): HttpResourceRef<TResponse | undefined> {
  return httpResource<TResponse>(() => {
    const path = pathFactory();

    if (!path) {
      return undefined;
    }

    return {
      url: apiUrl(path),
      method: 'GET',
    };
  });
}
