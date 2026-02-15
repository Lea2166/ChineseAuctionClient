import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersReportView } from './winners-report-view';

describe('WinnersReportView', () => {
  let component: WinnersReportView;
  let fixture: ComponentFixture<WinnersReportView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnersReportView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnersReportView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
