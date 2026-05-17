import { ResourceStatus } from '@angular/core';

export interface ApiResource<T> {
  status: () => ResourceStatus;
  value: () => T | undefined;
  error: () => Error | undefined;
}
