import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerPartyhallViewComponent } from './owner-partyhall-view.component';

describe('OwnerPartyhallViewComponent', () => {
  let component: OwnerPartyhallViewComponent;
  let fixture: ComponentFixture<OwnerPartyhallViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerPartyhallViewComponent]
    });
    fixture = TestBed.createComponent(OwnerPartyhallViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
