import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsFilters } from './donors-filters';

describe('DonorsFilters', () => {
  let component: DonorsFilters;
  let fixture: ComponentFixture<DonorsFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonorsFilters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorsFilters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
