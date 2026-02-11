import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartActions } from './cart-actions';

describe('CartActions', () => {
  let component: CartActions;
  let fixture: ComponentFixture<CartActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartActions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartActions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
