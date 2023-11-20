import { Component } from '@angular/core';
import { Owner } from 'src/shared/models/user.model';
import { OwnerServiceService } from 'src/shared/services/owner-service.service';

@Component({
  selector: 'app-owner-profile',
  templateUrl: './owner-profile.component.html',
  styleUrls: ['./owner-profile.component.css']
})
export class OwnerProfileComponent {
  ownerDetails!: Owner;
  age!: number;
  constructor(ownerService: OwnerServiceService){
    ownerService.activeOwner.subscribe((data: Owner)=>{
      this.ownerDetails = data;
      this.age = new Date().getFullYear() - (this.ownerDetails.dob.split('-')[0] as unknown as number); 

      console.log(this.ownerDetails);
    })

  }
}
