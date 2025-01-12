import { TestBed } from '@angular/core/testing';

import { ThuluthService } from './thuluth.service';

describe('TuluthService', () => {
  let service: ThuluthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThuluthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
