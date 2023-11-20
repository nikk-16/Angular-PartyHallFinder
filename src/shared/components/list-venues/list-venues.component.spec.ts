import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVenuesComponent } from './list-venues.component';

describe('ListVenuesComponent', () => {
  let component: ListVenuesComponent;
  let fixture: ComponentFixture<ListVenuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListVenuesComponent]
    });
    fixture = TestBed.createComponent(ListVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
