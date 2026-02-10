import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCart } from './get-cart';

describe('GetCart', () => {
  let component: GetCart;
  let fixture: ComponentFixture<GetCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
