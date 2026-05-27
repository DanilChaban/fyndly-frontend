import { ApiErrorCode } from '@core/types/api/api-error-code';

export type ServerValidationErrors = ServerValidationError[];

interface ServerValidationError {
  field: string;
  code: ApiErrorCode;
}
