import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrizeView } from './add-prize-view';

describe('AddPrizeView', () => {
  let component: AddPrizeView;
  let fixture: ComponentFixture<AddPrizeView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPrizeView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPrizeView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
