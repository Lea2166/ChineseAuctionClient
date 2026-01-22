import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesListView } from './sales-list-view';

describe('SalesListView', () => {
  let component: SalesListView;
  let fixture: ComponentFixture<SalesListView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesListView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesListView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
