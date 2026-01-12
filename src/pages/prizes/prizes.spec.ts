import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prizes } from './prizes';

describe('Prizes', () => {
  let component: Prizes;
  let fixture: ComponentFixture<Prizes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prizes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prizes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
