import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDonor } from './delete-donor';

describe('DeleteDonor', () => {
  let component: DeleteDonor;
  let fixture: ComponentFixture<DeleteDonor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteDonor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDonor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
