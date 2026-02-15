import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRevenueReport } from './total-revenue-report';

describe('TotalRevenueReport', () => {
  let component: TotalRevenueReport;
  let fixture: ComponentFixture<TotalRevenueReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalRevenueReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalRevenueReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
