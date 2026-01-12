import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePrize } from './one-prize';

describe('OnePrize', () => {
  let component: OnePrize;
  let fixture: ComponentFixture<OnePrize>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnePrize]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnePrize);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
