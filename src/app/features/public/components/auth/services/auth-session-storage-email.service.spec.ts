import { TestBed } from '@angular/core/testing';

import { AuthSessionStorageEmailService } from '@auth/services/auth-session-storage-email.service';

describe('AuthSessionStorageEmailService', () => {
  let service: AuthSessionStorageEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSessionStorageEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
