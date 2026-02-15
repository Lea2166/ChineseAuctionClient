import { TestBed } from '@angular/core/testing';

import { Winners } from './winners';

describe('Winners', () => {
  let service: Winners;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Winners);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
