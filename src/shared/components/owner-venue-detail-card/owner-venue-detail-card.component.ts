import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PartyHall } from 'src/shared/models/user.model';
import { OwnerServiceService } from 'src/shared/services/owner-service.service';
import { PartyHallService } from 'src/shared/services/party-hall.service';
import { UserServiceService } from 'src/shared/services/user-service.service';

@Component({
  selector: 'app-owner-venue-detail-card',
  templateUrl: './owner-venue-detail-card.component.html',
  styleUrls: ['./owner-venue-detail-card.component.css']
})
export class OwnerVenueDetailCardComponent {
  @Input() venue!: PartyHall;
  @Output() updateEvent = new EventEmitter<PartyHall>();
  imgURL!: string;
  id!: string;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private userService: UserServiceService, private partyHallService: PartyHallService, private ownerService: OwnerServiceService) {
    ownerService.activeItem.subscribe((data: string)=>{this.id = data;}) 
  }

  ngOnInit(): void {
    console.log(this.venue?.images);
    this.imgURL = this.venue?.images[0];
  }

  update(){
    this.ownerService.setActivePartyHall(this.venue);
    setTimeout(()=>{
    this.router.navigate(['owner/', this.id, 'updatePartyHall', this.venue.partyHallId]);},300)
  }
  openVenue(){
    this.router.navigate(['owner/', this.id, 'partyHall', this.venue.partyHallId]);
  }
}
