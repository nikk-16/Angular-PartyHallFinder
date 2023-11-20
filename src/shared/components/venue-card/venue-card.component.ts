import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PartyHall } from 'src/shared/models/user.model';
import { PartyHallService } from 'src/shared/services/party-hall.service';
import { UserServiceService } from 'src/shared/services/user-service.service';

@Component({
  selector: 'app-venue-card',
  templateUrl: './venue-card.component.html',
  styleUrls: ['./venue-card.component.css']
})
export class VenueCardComponent {
  @Input() venue!: PartyHall;
  imgURL!: string;
  constructor(private router: Router, private activeRoute: ActivatedRoute, private userService: UserServiceService, private partyHallService: PartyHallService) { 
  }

  ngOnInit(): void {
    console.log(this.venue?.images);
    this.imgURL = this.venue?.images[0];
  }
  openVenue(e: Event){
    this.router.navigate([this.venue.partyHallId, 'login', 'user']);
  }
}
