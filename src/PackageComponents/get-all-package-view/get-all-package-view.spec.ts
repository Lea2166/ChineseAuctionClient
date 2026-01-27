import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllPackageView } from './get-all-package-view';

describe('GetAllPackageView', () => {
  let component: GetAllPackageView;
  let fixture: ComponentFixture<GetAllPackageView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllPackageView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllPackageView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
