import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorsListView } from './donors-list-view';

describe('DonorsListView', () => {
  let component: DonorsListView;
  let fixture: ComponentFixture<DonorsListView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonorsListView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorsListView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
