import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueDetailCardComponent } from './venue-detail-card.component';

describe('VenueDetailCardComponent', () => {
  let component: VenueDetailCardComponent;
  let fixture: ComponentFixture<VenueDetailCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenueDetailCardComponent]
    });
    fixture = TestBed.createComponent(VenueDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
