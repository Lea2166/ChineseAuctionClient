import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettAllPackages } from './gett-all-packages';

describe('GettAllPackages', () => {
  let component: GettAllPackages;
  let fixture: ComponentFixture<GettAllPackages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GettAllPackages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GettAllPackages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
