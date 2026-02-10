import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeDraw } from './prize-draw';

describe('PrizeDraw', () => {
  let component: PrizeDraw;
  let fixture: ComponentFixture<PrizeDraw>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizeDraw]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrizeDraw);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
