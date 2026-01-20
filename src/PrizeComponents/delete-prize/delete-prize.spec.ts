import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePrize } from './delete-prize';

describe('DeletePrize', () => {
  let component: DeletePrize;
  let fixture: ComponentFixture<DeletePrize>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePrize]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletePrize);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
