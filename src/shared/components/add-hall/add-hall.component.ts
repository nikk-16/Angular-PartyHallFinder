import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PartyHall } from 'src/shared/models/user.model';
import { OwnerServiceService } from 'src/shared/services/owner-service.service';
import { PartyHallService } from 'src/shared/services/party-hall.service';

@Component({
  selector: 'app-add-hall',
  templateUrl: './add-hall.component.html',
  styleUrls: ['./add-hall.component.css']
})
export class AddHallComponent {

  addForm!: FormGroup;
  id!: string;

  constructor(private activeRoute: ActivatedRoute, private partyService: PartyHallService, private ownerService: OwnerServiceService, private fb: FormBuilder) {
    ownerService.activeItem.subscribe((data: string) => { this.id = data; })
    this.addForm = this.fb.group({
      partyHallName: new FormControl('',),
      capacity: new FormControl(),
      prices: new FormControl(),
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(),
      hall: new FormControl(false),
      conferenceRoom: new FormControl(false),
      poolSide: new FormControl(false),
      lawn: new FormControl(false),
      garden: new FormControl(false),
      veg: new FormControl(),
      nonVeg: new FormControl(),
      imageLink1: new FormControl(''),
      imageLink2: new FormControl(''),
      latitudes: new FormControl(),
      longitudes: new FormControl(),
    });
  }

  ngOninit() {
  }

  addToDatabase() {
    console.log(this.addForm.value as PartyHall)
    this.addForm.valueChanges.subscribe(data => {
      console.log(data)
    })
    this.partyService.addPartyHallData(this.id, { ...this.addForm.value }).subscribe((data: any) => {
      console.log(data);
    });
  }
}
