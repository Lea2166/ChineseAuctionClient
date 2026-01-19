import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCategories } from './get-categories';

describe('GetCategories', () => {
  let component: GetCategories;
  let fixture: ComponentFixture<GetCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetCategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
