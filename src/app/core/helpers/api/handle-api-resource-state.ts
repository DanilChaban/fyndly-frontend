import { effect, ResourceStatus } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResourceOptions } from '@core/types/api/api-resource-options';
import { ApiResource } from '@core/types/api/api-resource';
import { ApiErrorCode } from '@core/types/api/api-error-code';

export function handleApiResourceState<T>(resource: ApiResource<T>, options: ApiResourceOptions<T>): void {
  let previousStatus: ResourceStatus | null = null;

  effect(() => {
    const status = resource.status();

    if (status === previousStatus) {
      return;
    }

    previousStatus = status;

    if (status === 'error') {
      const error = resource.error();

      if (error instanceof HttpErrorResponse) {
        options.onError?.(getApiErrorCode(error), error);
        options.onReset?.();
      }

      return;
    }

    if (status === 'resolved') {
      options.onSuccess?.(resource.value());
      options.onReset?.();
    }
  });
}

function getApiErrorCode(error: HttpErrorResponse): ApiErrorCode {
  return error.error.message;
}
