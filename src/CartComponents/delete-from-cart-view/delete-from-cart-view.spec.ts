import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFromCartView } from './delete-from-cart-view';

describe('DeleteFromCartView', () => {
  let component: DeleteFromCartView;
  let fixture: ComponentFixture<DeleteFromCartView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteFromCartView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteFromCartView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
