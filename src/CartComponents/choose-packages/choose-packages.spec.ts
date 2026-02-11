import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePackages } from './choose-packages';

describe('ChoosePackages', () => {
  let component: ChoosePackages;
  let fixture: ComponentFixture<ChoosePackages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosePackages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosePackages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
