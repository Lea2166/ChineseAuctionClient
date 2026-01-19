import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePrizeView } from './update-prize-view';

describe('UpdatePrizeView', () => {
  let component: UpdatePrizeView;
  let fixture: ComponentFixture<UpdatePrizeView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePrizeView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePrizeView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
