import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersReport } from './winners-report';

describe('WinnersReport', () => {
  let component: WinnersReport;
  let fixture: ComponentFixture<WinnersReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinnersReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnersReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
