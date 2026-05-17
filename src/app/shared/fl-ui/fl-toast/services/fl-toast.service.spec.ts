import { TestBed } from '@angular/core/testing';

import { FlToastService } from '@ui/fl-toast/services/fl-toast.service';

describe('FlToastService', () => {
  let service: FlToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
