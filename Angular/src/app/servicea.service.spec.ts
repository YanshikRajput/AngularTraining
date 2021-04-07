import { TestBed } from '@angular/core/testing';

import { ServiceaService } from './servicea.service';

describe('ServiceaService', () => {
  let service: ServiceaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
