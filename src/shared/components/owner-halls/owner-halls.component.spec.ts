import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerHallsComponent } from './owner-halls.component';

describe('OwnerHallsComponent', () => {
  let component: OwnerHallsComponent;
  let fixture: ComponentFixture<OwnerHallsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerHallsComponent]
    });
    fixture = TestBed.createComponent(OwnerHallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
