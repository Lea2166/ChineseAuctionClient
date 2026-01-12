import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeCard } from './prize-card';

describe('PrizeCard', () => {
  let component: PrizeCard;
  let fixture: ComponentFixture<PrizeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizeCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrizeCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
