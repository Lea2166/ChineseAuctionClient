import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsList } from './donors-list';

describe('DonorsList', () => {
  let component: DonorsList;
  let fixture: ComponentFixture<DonorsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonorsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
