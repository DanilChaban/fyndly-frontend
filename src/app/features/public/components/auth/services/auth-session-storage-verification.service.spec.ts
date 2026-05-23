import { TestBed } from '@angular/core/testing';

import { AuthSessionStorageVerificationService } from '@auth/services/auth-session-storage-verification.service';

describe('AuthSessionStorageVerificationService', () => {
  let service: AuthSessionStorageVerificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSessionStorageVerificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
