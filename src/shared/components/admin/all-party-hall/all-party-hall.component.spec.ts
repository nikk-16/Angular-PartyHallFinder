import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPartyHallComponent } from './all-party-hall.component';

describe('AllPartyHallComponent', () => {
  let component: AllPartyHallComponent;
  let fixture: ComponentFixture<AllPartyHallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllPartyHallComponent]
    });
    fixture = TestBed.createComponent(AllPartyHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
