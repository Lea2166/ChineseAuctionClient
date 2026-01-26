import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackageView } from './add-package-view';

describe('AddPackageView', () => {
  let component: AddPackageView;
  let fixture: ComponentFixture<AddPackageView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPackageView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPackageView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
