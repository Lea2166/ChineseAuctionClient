import { TestBed } from '@angular/core/testing';

import { Donors } from './donors';

describe('Donors', () => {
  let service: Donors;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Donors);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
