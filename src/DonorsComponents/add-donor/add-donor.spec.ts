import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDonor } from './add-donor';

describe('AddDonor', () => {
  let component: AddDonor;
  let fixture: ComponentFixture<AddDonor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDonor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDonor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
