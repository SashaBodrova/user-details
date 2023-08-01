import { TestBed } from '@angular/core/testing';

import { OrgansService } from './logging.service';

describe('LoggingService', () => {
  let service: OrgansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrgansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
