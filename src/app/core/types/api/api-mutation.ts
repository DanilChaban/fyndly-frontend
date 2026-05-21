import { HttpResourceRef } from '@angular/common/http';

export interface ApiMutation<TPayload, TResponse> {
  resource: HttpResourceRef<TResponse | undefined>;
  execute: (payload?: TPayload) => void;
  reset: () => void;
}
