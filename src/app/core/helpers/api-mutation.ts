import { ApiMutationMethod } from '@core/types/api-mutation-method';
import { signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { ApiMutation } from '@core/types/api-mutation';
import { ApiMutationRequest } from '@core/types/api-mutation-request';
import { apiUrl } from '@core/helpers/api-url';

export function createApiMutation<TResponse, TPayload = void>(
  method: ApiMutationMethod,
  path: string,
): ApiMutation<TResponse, TPayload> {
  let requestId = 0;

  const request = signal<ApiMutationRequest<TPayload> | null>(null);

  const resource = httpResource<TResponse>(() => {
    if (!request()) {
      return undefined;
    }

    return {
      url: apiUrl(path),
      method,
      body: request()?.payload,
    };
  });

  return {
    resource,

    execute: (payload?: TPayload): void => {
      request.set({
        payload,
        requestId: ++requestId,
      });
    },

    reset: (): void => {
      request.set(null);
    },
  };
}
