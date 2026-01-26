import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFilters } from './order-filters';

describe('OrderFilters', () => {
  let component: OrderFilters;
  let fixture: ComponentFixture<OrderFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderFilters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderFilters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
