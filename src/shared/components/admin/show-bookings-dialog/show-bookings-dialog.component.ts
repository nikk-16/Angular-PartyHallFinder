import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/shared/models/user.model';
import { AllUsersComponent } from '../all-users/all-users.component';
import { AllOwnersComponent } from '../all-owners/all-owners.component';

@Component({
  selector: 'app-show-bookings-dialog',
  templateUrl: './show-bookings-dialog.component.html',
  styleUrls: ['./show-bookings-dialog.component.css']
})
export class ShowBookingsDialogComponent {
viewBooking() {
throw new Error('Method not implemented.');
}
  data!: User;
  partyHallIds!: string[];
  constructor(@Inject(MAT_DIALOG_DATA) public element: any, public dialogRef: MatDialogRef<AllUsersComponent>) { 
    // console.log(element.element.bookedPartyHallIds[0]);
      this.partyHallIds = element.element.bookedPartyHallIds;
  } 
}
