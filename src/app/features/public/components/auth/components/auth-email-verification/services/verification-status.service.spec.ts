import { TestBed } from '@angular/core/testing';

import { VerificationStatusService } from '@auth/components/auth-email-verification/services/verification-status.service';

describe('VerificationStatusService', () => {
  let service: VerificationStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificationStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
