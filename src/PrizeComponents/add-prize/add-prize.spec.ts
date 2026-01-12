import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrize } from './add-prize';

describe('AddPrize', () => {
  let component: AddPrize;
  let fixture: ComponentFixture<AddPrize>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPrize]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPrize);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
