import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Booking, PartyHall } from 'src/shared/models/user.model';
import { PartyHallService } from 'src/shared/services/party-hall.service';
import { OwnerPartyhallViewComponent } from '../owner-partyhall-view/owner-partyhall-view.component';

@Component({
  selector: 'app-owner-show-booking-card',
  templateUrl: './owner-show-booking-card.component.html',
  styleUrls: ['./owner-show-booking-card.component.css']
})
export class OwnerShowBookingCardComponent {
  bookingId!: string;
  booking!: Booking;
  partyHall!: PartyHall;
  date !: string;
  constructor(private partyService: PartyHallService, @Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<OwnerPartyhallViewComponent> ) {
    console.log(data);
    this.booking = data as Booking;
  }
  ngOnInit(): void {
        this.partyService.getPartyHallDataById(this.booking.partyHallId).subscribe((data: PartyHall)=>{
          this.partyHall = data as PartyHall;
          console.log(this.partyHall);
        });
  }
}
