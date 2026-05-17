import { HttpResourceRef } from '@angular/common/http';

export interface ApiMutation<TResponse, TPayload> {
  resource: HttpResourceRef<TResponse | undefined>;
  execute: (payload?: TPayload) => void;
  reset: () => void;
}
