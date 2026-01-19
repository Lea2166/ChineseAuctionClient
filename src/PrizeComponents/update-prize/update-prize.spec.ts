import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePrize } from './update-prize';

describe('UpdatePrize', () => {
  let component: UpdatePrize;
  let fixture: ComponentFixture<UpdatePrize>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePrize]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePrize);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
