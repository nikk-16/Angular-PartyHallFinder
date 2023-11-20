import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePartyHallComponent } from './update-party-hall.component';

describe('UpdatePartyHallComponent', () => {
  let component: UpdatePartyHallComponent;
  let fixture: ComponentFixture<UpdatePartyHallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatePartyHallComponent]
    });
    fixture = TestBed.createComponent(UpdatePartyHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
