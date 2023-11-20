import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayVenueComponent } from './display-venue.component';

describe('DisplayVenueComponent', () => {
  let component: DisplayVenueComponent;
  let fixture: ComponentFixture<DisplayVenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayVenueComponent]
    });
    fixture = TestBed.createComponent(DisplayVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
