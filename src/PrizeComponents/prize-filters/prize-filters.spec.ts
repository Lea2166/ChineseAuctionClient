import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeFilters } from './prize-filters';

describe('PrizeFilters', () => {
  let component: PrizeFilters;
  let fixture: ComponentFixture<PrizeFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizeFilters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrizeFilters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
