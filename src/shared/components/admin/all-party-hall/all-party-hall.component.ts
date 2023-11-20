import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PartyHall } from 'src/shared/models/user.model';
import { PartyHallService } from 'src/shared/services/party-hall.service';
import { UserServiceService } from 'src/shared/services/user-service.service';

@Component({
  selector: 'app-all-party-hall',
  templateUrl: './all-party-hall.component.html',
  styleUrls: ['./all-party-hall.component.css']
})
export class AllPartyHallComponent {
  dataSource!: PartyHall[];
  imgURL!: string;
  partyHalls!: PartyHall[];
  displayedColumns = ['ownerId', 'partyHallName', 'street', 'city', 'prices', 'capacity', 'bookings'];
  constructor(private router: Router, private activeRoute: ActivatedRoute, private userService: UserServiceService, private partyHallService: PartyHallService) {
    partyHallService.getPartyHallsData().subscribe((data: any)=>{
      console.log(data)
      this.partyHalls = data as PartyHall[];
      console.log(this.partyHalls);
      this.dataSource = this.partyHalls;
    }); 
  }

  // ngOnInit(): void {
  //   // console.log(this.venue?.images);
  //   this.imgURL = this.venue?.images[0];
  // }
}
