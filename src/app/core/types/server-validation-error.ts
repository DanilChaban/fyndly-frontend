import { ApiErrorCode } from '@core/types/api/api-error-code';

export interface ServerValidationErrorResponse {
  error: {
    code: ApiErrorCode;
    fields: ServerValidationErrors;
  };
}

export type ServerValidationErrors = ServerValidationError[];

interface ServerValidationError {
  field: string;
  code: ApiErrorCode;
}
