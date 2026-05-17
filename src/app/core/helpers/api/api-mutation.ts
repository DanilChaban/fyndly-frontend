import { signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { apiUrl } from '@core/helpers/api/api-url';
import { ApiMutationMethod } from '@core/types/api/api-mutation-method';
import { ApiMutation } from '@core/types/api/api-mutation';
import { ApiMutationRequest } from '@core/types/api/api-mutation-request';

export function createApiMutation<TResponse, TPayload = void>(
  method: ApiMutationMethod,
  path: string,
): ApiMutation<TResponse, TPayload> {
  let requestId = 0;

  const request = signal<ApiMutationRequest<TPayload> | null>(null);

  const resource = httpResource<TResponse>(() => {
    const currentRequest = request();

    if (!currentRequest) {
      return undefined;
    }

    return {
      url: apiUrl(path),
      method,
      body: currentRequest.payload,
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
