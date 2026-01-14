import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDonorView } from './update-donor-view';

describe('UpdateDonorView', () => {
  let component: UpdateDonorView;
  let fixture: ComponentFixture<UpdateDonorView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDonorView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDonorView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
