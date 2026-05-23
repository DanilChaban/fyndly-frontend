import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { emailVerificationGuardGuard } from '@core/guards/email-verification-guard-guard';

describe('emailVerificationGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => emailVerificationGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
