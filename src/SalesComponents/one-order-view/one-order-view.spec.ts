import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOrderView } from './one-order-view';

describe('OneOrderView', () => {
  let component: OneOrderView;
  let fixture: ComponentFixture<OneOrderView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneOrderView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneOrderView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
