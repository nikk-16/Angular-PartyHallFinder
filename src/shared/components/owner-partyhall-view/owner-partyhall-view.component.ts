import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { PartialObserver } from 'rxjs';
import { BookedDates, Booking, PartyHall } from 'src/shared/models/user.model';
import { OwnerServiceService } from 'src/shared/services/owner-service.service';
import { PartyHallService } from 'src/shared/services/party-hall.service';
import { UserBookingCardComponent } from '../user-booking-card/user-booking-card.component';
import { OwnerShowBookingCardComponent } from '../owner-show-booking-card/owner-show-booking-card.component';



@Component({
  selector: 'app-owner-partyhall-view',
  templateUrl: './owner-partyhall-view.component.html',
  styleUrls: ['./owner-partyhall-view.component.css']
})
export class OwnerPartyhallViewComponent {
  partyHall!: PartyHall;
  displayedColumns = ['bookingId', 'userId', 'contact', 'date','payment' , 'view'];
  // dataSource!: ;
  dataSource!: Booking[];
  constructor(private partyService: PartyHallService, private activeRoute: ActivatedRoute, private ownerService: OwnerServiceService, private dialog: MatDialog){
    partyService.getPartyHallDataById(this.activeRoute.snapshot.params['partyHallId']).subscribe((data: any)=>{
      this.partyHall = data as PartyHall;
      this.dataSource = this.partyHall.bookings;
      console.log(this.dataSource)
    });
  }
  viewBooking(element: Booking){
    
    this.dialog.open(OwnerShowBookingCardComponent,{
      data: element
    })
  }

  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim().toLowerCase(); // Remove whitespace and convert to lowercase
  //   const filteredData = this.partyHall.bookedDates.filter((date: BookedDates) => {
  //     // Filter logic here
  //     // Example: return date.property.toLowerCase().includes(filterValue);
  //   });
  //   this.dataSource.filter = filteredData;
  // }
}
