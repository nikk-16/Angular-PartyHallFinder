import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBookingsDialogComponent } from './show-bookings-dialog.component';

describe('ShowBookingsDialogComponent', () => {
  let component: ShowBookingsDialogComponent;
  let fixture: ComponentFixture<ShowBookingsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowBookingsDialogComponent]
    });
    fixture = TestBed.createComponent(ShowBookingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
