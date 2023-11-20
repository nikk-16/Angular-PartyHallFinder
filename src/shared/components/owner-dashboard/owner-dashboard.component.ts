import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner, PartyHall } from 'src/shared/models/user.model';
import { OwnerServiceService } from 'src/shared/services/owner-service.service';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.component.html',
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent {
  partyHalls!: PartyHall[]
  owner!: Owner;
  id!: string;

  constructor(private ownerService: OwnerServiceService, private activeRoute: ActivatedRoute, private router: Router){
    ownerService.activeItem.subscribe((data: string)=>{this.id = data;})
    ownerService.getPartyHallsByOwner(this.id).subscribe((data: any)=>{
      console.log(data)
      this.partyHalls = data as PartyHall[];
      console.log(this.partyHalls);
    });
    ownerService.getOwnerById(this.id).subscribe((data: any)=>{
      console.log(data)
      this.owner = data as Owner;
      console.log(this.owner);
    });
  }
  ngOnInit(): void {
  }
  addPartyHall(){
    // const id = this.activeRoute.snapshot.params['id'];
    this.router.navigate(['owner', this.id, 'addPartyHall']);
  }
}
