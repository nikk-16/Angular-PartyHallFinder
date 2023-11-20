import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerShowBookingCardComponent } from './owner-show-booking-card.component';

describe('OwnerShowBookingCardComponent', () => {
  let component: OwnerShowBookingCardComponent;
  let fixture: ComponentFixture<OwnerShowBookingCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerShowBookingCardComponent]
    });
    fixture = TestBed.createComponent(OwnerShowBookingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
