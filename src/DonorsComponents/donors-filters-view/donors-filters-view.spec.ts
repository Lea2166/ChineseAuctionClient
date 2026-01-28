import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsFiltersView } from './donors-filters-view';

describe('DonorsFiltersView', () => {
  let component: DonorsFiltersView;
  let fixture: ComponentFixture<DonorsFiltersView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonorsFiltersView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorsFiltersView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
