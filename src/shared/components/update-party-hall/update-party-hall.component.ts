import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PartyHall } from 'src/shared/models/user.model';
import { OwnerServiceService } from 'src/shared/services/owner-service.service';
import { PartyHallService } from 'src/shared/services/party-hall.service';

@Component({
  selector: 'app-update-party-hall',
  templateUrl: './update-party-hall.component.html',
  styleUrls: ['./update-party-hall.component.css']
})
export class UpdatePartyHallComponent {
  updateform!: FormGroup;
  id!: string;
  @Input() partyHall!: PartyHall;

  constructor(private activeRoute: ActivatedRoute, private partyService: PartyHallService, private ownerService: OwnerServiceService, private fb: FormBuilder) {
    console.log(this.partyHall)
    ownerService.activeItem.subscribe((data: string) => { this.id = data; })
    ownerService.activePartyHall.subscribe((data: any) => { this.partyHall = data; console.log(data) })
    // setTimeout(() =>{

    //   this.updateform = this.fb.group({
    //     partyHallName: new FormControl(this.partyHall.partyHallName),
    //     capacity: new FormControl(this.partyHall.capacity),
    //     prices: new FormControl(this.partyHall.prices),
    //     street: new FormControl(this.partyHall.street),
    //     city: new FormControl(this.partyHall.city),
    //     state: new FormControl(this.partyHall.state),
    //     pincode: new FormControl(this.partyHall.pincode),
    //     hall: new FormControl(this.partyHall.features.hall),
    //     conferenceRoom: new FormControl(this.partyHall.features.conferenceRoom),
    //     poolSide: new FormControl(this.partyHall.features.poolSide),
    //     lawn: new FormControl(this.partyHall.features.lawn),
    //     garden: new FormControl(this.partyHall.features.garden),
    //     veg: new FormControl(this.partyHall.features.veg),
    //     nonVeg: new FormControl(this.partyHall.features.nonVeg)
    //   });
    // },10000)
    this.updateform = this.fb.group({
      partyHallName: new FormControl(this.partyHall.partyHallName),
      capacity: new FormControl(this.partyHall.capacity),
      prices: new FormControl(this.partyHall.prices),
      street: new FormControl(this.partyHall.street),
      city: new FormControl(this.partyHall.city),
      state: new FormControl(this.partyHall.state),
      pincode: new FormControl(this.partyHall.pincode, [Validators.minLength(6), Validators.maxLength(6)]),
      hall: new FormControl(this.partyHall.features.hall),
      conferenceRoom: new FormControl(this.partyHall.features.conferenceRoom),
      poolSide: new FormControl(this.partyHall.features.poolSide),
      lawn: new FormControl(this.partyHall.features.lawn),
      garden: new FormControl(this.partyHall.features.garden),
      veg: new FormControl(this.partyHall.features.veg),
      nonVeg: new FormControl(this.partyHall.features.nonVeg)
    });
  }

  ngOninit() {
    this.partyService.getPartyHallDataById(this.activeRoute.snapshot.params['partyHallId']).subscribe((data: any)=>{
      // console.log(data)
      this.partyHall = data as PartyHall;
      // console.log(this.partyHall);
    });
  }
  ngAfterViewInit(){
    
  }


  editHall() {
    console.log(this.updateform.value as PartyHall)
    this.updateform.valueChanges.subscribe(data => {
      // console.log(data)
    })
    this.partyService.addPartyHallData(this.id, { ...this.updateform.value }).subscribe((data: any) => {
      // console.log(data);
    });
  }
  
}
