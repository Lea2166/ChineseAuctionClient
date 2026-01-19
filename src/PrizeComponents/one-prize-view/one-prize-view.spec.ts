import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePrizeView } from './one-prize-view';

describe('OnePrizeView', () => {
  let component: OnePrizeView;
  let fixture: ComponentFixture<OnePrizeView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnePrizeView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnePrizeView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
