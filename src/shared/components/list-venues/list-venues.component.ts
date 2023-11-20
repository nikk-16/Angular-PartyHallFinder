import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PartyHall } from 'src/shared/models/user.model';
import { PartyHallService } from 'src/shared/services/party-hall.service';

@Component({
  selector: 'app-list-venues',
  templateUrl: './list-venues.component.html',
  styleUrls: ['./list-venues.component.css']
})
export class ListVenuesComponent {
  partyHalls: PartyHall[] = [];
  filterForm!: FormGroup;
  value = 25000;

  constructor(private partyHallService: PartyHallService,) {
    this.partyHallService.getPartyHallsData().subscribe((data: any) => {
      console.log(data);
      this.partyHalls = data as PartyHall[];
      console.log(this.partyHalls)
    });

    // this.filterForm.valueChanges.subscribe((e) => {
    //   console.log(e.location, e.guests, e.date, e.budget);
    //   this.partyHallService.filterData(e.location, e.guests, e.date, e.budget).subscribe((data: any)=>{
    //     console.log(data);
    //     this.partyHalls = data as PartyHall[];
    //   });
    // });
   }

  
  ngOnInit(){
    this.filterForm = new FormGroup({
      location: new FormControl(''),
      guests: new FormControl(''),
      date: new FormControl(''),
      budget: new FormControl('')
    });
  }

  getRange(e: number){
    // console.log(typeof e)
    this.value = e;
  }

  onSubmit(evv: Event){
    console.log(evv.target);
    console.log(this.filterForm.value.location);
    this.partyHallService.filterData(this.filterForm.value.location, this.filterForm.value.guests, this.filterForm.value.date, this.value).subscribe((data: any)=>{
      console.log(data);
      this.partyHalls = data as PartyHall[];
    });
  }
}
