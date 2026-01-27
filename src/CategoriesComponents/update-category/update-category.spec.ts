import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCategory } from './update-category';

describe('UpdateCategory', () => {
  let component: UpdateCategory;
  let fixture: ComponentFixture<UpdateCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
