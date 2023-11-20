import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PartyHall } from 'src/shared/models/user.model';
import { PartyHallService } from 'src/shared/services/party-hall.service';
import { UserServiceService } from 'src/shared/services/user-service.service';

@Component({
  selector: 'app-owner-halls',
  templateUrl: './owner-halls.component.html',
  styleUrls: ['./owner-halls.component.css']
})
export class OwnerHallsComponent {
  @Input() venue!: PartyHall;
  imgURL!: string;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private userService: UserServiceService, private partyHallService: PartyHallService) { 
  }

  ngOnInit(): void {
    // console.log(this.venue?.images);
    this.imgURL = this.venue?.images[0];
  }

  editVenue(e: Event){
    // this.router.navigate([this.venue.partyHallId, 'login', 'user']);
  }
}
