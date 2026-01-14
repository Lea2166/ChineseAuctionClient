import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDonorView } from './add-donor-view';

describe('AddDonorView', () => {
  let component: AddDonorView;
  let fixture: ComponentFixture<AddDonorView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDonorView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDonorView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
