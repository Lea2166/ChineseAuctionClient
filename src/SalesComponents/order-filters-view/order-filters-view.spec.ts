import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFiltersView } from './order-filters-view';

describe('OrderFiltersView', () => {
  let component: OrderFiltersView;
  let fixture: ComponentFixture<OrderFiltersView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderFiltersView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderFiltersView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
