import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDrawer } from './auth-drawer';

describe('AuthDrawer', () => {
  let component: AuthDrawer;
  let fixture: ComponentFixture<AuthDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthDrawer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthDrawer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
