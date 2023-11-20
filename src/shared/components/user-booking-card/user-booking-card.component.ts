import { Component, Input } from '@angular/core';
import { Booking, PartyHall } from 'src/shared/models/user.model';
import { PartyHallService } from 'src/shared/services/party-hall.service';

@Component({
  selector: 'app-user-booking-card',
  templateUrl: './user-booking-card.component.html',
  styleUrls: ['./user-booking-card.component.css']
})
export class UserBookingCardComponent {
  @Input() bookingId!: string;
  booking!: Booking;
  partyHall!: PartyHall;
  date !: string;
  constructor(private partyService: PartyHallService) {
  }
  ngOnInit(): void {
    this.partyService.getBookingById(this.bookingId).subscribe((data: Booking)=>{
        this.booking = data as Booking;
        console.log(this.booking);
        this.partyService.getPartyHallDataById(this.booking.partyHallId).subscribe((data: PartyHall)=>{
          this.partyHall = data as PartyHall;
          console.log(this.partyHall);
        });
    });
  }

}
