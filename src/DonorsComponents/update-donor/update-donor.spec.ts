import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDonor } from './update-donor';

describe('UpdateDonor', () => {
  let component: UpdateDonor;
  let fixture: ComponentFixture<UpdateDonor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDonor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDonor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
