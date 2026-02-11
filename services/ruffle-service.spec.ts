import { TestBed } from '@angular/core/testing';

import { RuffleService } from './ruffle-service';

describe('RuffleService', () => {
  let service: RuffleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RuffleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
