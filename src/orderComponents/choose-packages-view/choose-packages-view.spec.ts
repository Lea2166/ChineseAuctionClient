import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePackagesView } from './choose-packages-view';

describe('ChoosePackagesView', () => {
  let component: ChoosePackagesView;
  let fixture: ComponentFixture<ChoosePackagesView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosePackagesView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosePackagesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
