import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeDrawView } from './prize-draw-view';

describe('PrizeDrawView', () => {
  let component: PrizeDrawView;
  let fixture: ComponentFixture<PrizeDrawView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizeDrawView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrizeDrawView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
