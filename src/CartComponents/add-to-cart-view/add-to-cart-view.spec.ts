import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCartView } from './add-to-cart-view';

describe('AddToCartView', () => {
  let component: AddToCartView;
  let fixture: ComponentFixture<AddToCartView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToCartView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToCartView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
