import { TestBed } from '@angular/core/testing';

import { SessionStorageVerificationService } from '@auth/services/session-storage-verification.service';

describe('SessionStorageVerificationService', () => {
  let service: SessionStorageVerificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionStorageVerificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
