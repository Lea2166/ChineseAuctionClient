import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOrder } from './one-order';

describe('OneOrder', () => {
  let component: OneOrder;
  let fixture: ComponentFixture<OneOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
