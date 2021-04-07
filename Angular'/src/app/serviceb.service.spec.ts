import { TestBed } from '@angular/core/testing';

import { ServicebService } from './serviceb.service';

describe('ServicebService', () => {
  let service: ServicebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
