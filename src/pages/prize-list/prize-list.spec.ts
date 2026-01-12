import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeList } from './prize-list';

describe('PrizeList', () => {
  let component: PrizeList;
  let fixture: ComponentFixture<PrizeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrizeList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrizeList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
