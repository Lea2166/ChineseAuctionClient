import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCartView } from './get-cart-view';

describe('GetCartView', () => {
  let component: GetCartView;
  let fixture: ComponentFixture<GetCartView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCartView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCartView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
