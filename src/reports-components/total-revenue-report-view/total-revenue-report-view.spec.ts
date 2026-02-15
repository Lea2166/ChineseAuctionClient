import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRevenueReportView } from './total-revenue-report-view';

describe('TotalRevenueReportView', () => {
  let component: TotalRevenueReportView;
  let fixture: ComponentFixture<TotalRevenueReportView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalRevenueReportView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalRevenueReportView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
