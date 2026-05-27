import { HttpErrorResponse } from '@angular/common/http';
import { ApiErrorCode } from '@core/types/api/api-error-code';

export interface ApiResourceOptions<T> {
  onSuccess?: (value: T | undefined) => void;
  onError?: (errorCode: ApiErrorCode, error: HttpErrorResponse) => void;
  onReset?: () => void;
}
