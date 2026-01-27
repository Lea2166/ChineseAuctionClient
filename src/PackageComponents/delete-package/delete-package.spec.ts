import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePackage } from './delete-package';

describe('DeletePackage', () => {
  let component: DeletePackage;
  let fixture: ComponentFixture<DeletePackage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePackage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePackage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
