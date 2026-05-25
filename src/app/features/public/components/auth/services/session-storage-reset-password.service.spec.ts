import { TestBed } from '@angular/core/testing';

import { SessionStorageResetPasswordService } from '@auth/services/session-storage-reset-password.service';

describe('SessionStorageResetPasswordService', () => {
  let service: SessionStorageResetPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionStorageResetPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
