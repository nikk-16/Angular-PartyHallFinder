import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Owner, PartyHall } from 'src/shared/models/user.model';
import { AllPartyHallComponent } from '../all-party-hall/all-party-hall.component';
import { AllOwnersComponent } from '../all-owners/all-owners.component';

@Component({
  selector: 'app-show-partyhall-dialog',
  templateUrl: './show-partyhall-dialog.component.html',
  styleUrls: ['./show-partyhall-dialog.component.css']
})
export class ShowPartyhallDialogComponent {
viewBooking() {
throw new Error('Method not implemented.');
}
  partyHallIds!: string[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<AllOwnersComponent>) {
    this.partyHallIds = data.element.partyHallIds;
    console.log(data)
    console.warn(this.partyHallIds)
  }
}
