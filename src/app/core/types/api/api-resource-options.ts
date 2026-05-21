import { HttpErrorResponse } from '@angular/common/http';

export interface ApiResourceOptions<T> {
  onSuccess?: (value: T | undefined) => void;
  onError?: (errorCode: string, error: HttpErrorResponse) => void;
  onReset?: () => void;
}
