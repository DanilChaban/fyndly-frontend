import { TestBed } from '@angular/core/testing';

import { LocalizedRouterService } from '@core/services/localized-router.service';

describe('LocalizedRouterService', () => {
  let service: LocalizedRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalizedRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
