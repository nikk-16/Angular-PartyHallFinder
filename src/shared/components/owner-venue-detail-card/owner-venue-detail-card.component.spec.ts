import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerVenueDetailCardComponent } from './owner-venue-detail-card.component';

describe('OwnerVenueDetailCardComponent', () => {
  let component: OwnerVenueDetailCardComponent;
  let fixture: ComponentFixture<OwnerVenueDetailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerVenueDetailCardComponent]
    });
    fixture = TestBed.createComponent(OwnerVenueDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
