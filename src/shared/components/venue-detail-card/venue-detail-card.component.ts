import { DatePipe } from '@angular/common';
import { identifierName } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PartyHall} from 'src/shared/models/user.model';
import { PartyHallService } from 'src/shared/services/party-hall.service';
import { UserServiceService } from 'src/shared/services/user-service.service';


@Component({
  selector: 'app-venue-detail-card',
  templateUrl: './venue-detail-card.component.html',
  styleUrls: ['./venue-detail-card.component.css'],
  providers: [DatePipe]
})
export class VenueDetailCardComponent {
  @Input() venue!: PartyHall;
  imgURL!: string;
  userId!: string;
  bookedDates!: Date[];
  dateValue: Date = new Date();
  date!: FormControl;
  constructor(private router: Router, private activeRoute: ActivatedRoute, private userService: UserServiceService, private partyHallService: PartyHallService, private datePipe: DatePipe) {
    userService.activeItem.subscribe((data: string)=>{this.userId = data; console.log(data)});
    this.date = new FormControl(new Date());
    // this.venue.bookedDates
    // for(let i = 0; i < this.venue.bookedDates.length; i++){
    //   const [year, month, day] = this.venue.bookedDates[i].date.split('-');

    //   const bDate = new Date(+year, +month - 1, +day);
    //   this.bookedDates.push(new Date(bDate));
    // }
    // const [year, month, day] = "2023-11-19".split('-');

    // this.dateValue = new Date(+year, +month - 1, +day);
    // console.log(this.dateValue);
  }
  disabledDate(args: any): void {
    console.log(args.date as Date);
    console.log(this.dateValue.getDate());
    for(let i = 0; i < this.venue.bookedDates.length; i++){
      const [year, month, day] = this.venue?.bookedDates[i].date.split('-');

      const bDate = new Date(+year, +month - 1, +day);
      if (args.date.getDate() === bDate.getDate()) {
          //set 'true' to disable the weekends
          args.isDisabled = true;
      }
      // this.bookedDates.push(new Date(bDate));
    }
  }
  onChange(args: any): void {
    console.warn(this.transformDate(args.value))
    console.log(args.value);
  }
  transformDate(date: Date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    console.log(this.venue?.images);
    this.imgURL = this.venue?.images[0];
  }

  openVenue(e: Event){
    this.router.navigate(['user', this.userId, 'display', this.venue.partyHallId]);
  }
}
