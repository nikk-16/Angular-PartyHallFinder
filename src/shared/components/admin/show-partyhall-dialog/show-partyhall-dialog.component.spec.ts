import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPartyhallDialogComponent } from './show-partyhall-dialog.component';

describe('ShowPartyhallDialogComponent', () => {
  let component: ShowPartyhallDialogComponent;
  let fixture: ComponentFixture<ShowPartyhallDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPartyhallDialogComponent]
    });
    fixture = TestBed.createComponent(ShowPartyhallDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
