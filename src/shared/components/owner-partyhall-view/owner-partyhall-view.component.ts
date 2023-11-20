import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartialObserver } from 'rxjs';
import { BookedDates, Booking, PartyHall } from 'src/shared/models/user.model';
import { OwnerServiceService } from 'src/shared/services/owner-service.service';
import { PartyHallService } from 'src/shared/services/party-hall.service';



@Component({
  selector: 'app-owner-partyhall-view',
  templateUrl: './owner-partyhall-view.component.html',
  styleUrls: ['./owner-partyhall-view.component.css']
})
export class OwnerPartyhallViewComponent {
  partyHall!: PartyHall;
  displayedColumns = ['userId', 'date'];
  // dataSource!: ;
  dataSource!: BookedDates[];
  constructor(private partyService: PartyHallService, private activeRoute: ActivatedRoute, private ownerService: OwnerServiceService){
    partyService.getPartyHallDataById(this.activeRoute.snapshot.params['partyHallId']).subscribe((data: any)=>{
      console.log(data)
      this.partyHall = data as PartyHall;
      console.log(this.partyHall);
      this.dataSource = this.partyHall.bookedDates;
    });
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
