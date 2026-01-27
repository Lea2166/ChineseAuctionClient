import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeFiltersView } from './prize-filters-view';

describe('PrizeFiltersView', () => {
  let component: PrizeFiltersView;
  let fixture: ComponentFixture<PrizeFiltersView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizeFiltersView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrizeFiltersView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
