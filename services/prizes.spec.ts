import { TestBed } from '@angular/core/testing';

import { Prizes } from './prizes';

describe('Prizes', () => {
  let service: Prizes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Prizes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
