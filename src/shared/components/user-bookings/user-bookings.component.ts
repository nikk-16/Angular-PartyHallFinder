import { Component } from '@angular/core';
import { Booking, User } from 'src/shared/models/user.model';
import { PartyHallService } from 'src/shared/services/party-hall.service';
import { UserServiceService } from 'src/shared/services/user-service.service';

@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})
export class UserBookingsComponent {
  userId!: string;
  user!: User;
  // UserServiceService.activeUser.subscribe((data: User)=>{user = data; console.log(data)})
  hallIds: string[] = [];
  toShow!: boolean;
  bookings!: Booking[];
  constructor(private userService: UserServiceService, private partyService: PartyHallService){
    this.userService.activeItem.subscribe((data: string)=>{this.userId = data; console.log(data)})
    this.userService.activeUser.subscribe((data: User)=>{this.user = data; console.log(data)})
  }
  ngOnInit(): void {
    this.userService.activeItem.subscribe((data: string)=>{this.userId = data; console.log(data)})
    this.userService.activeUser.subscribe((data: User)=>{this.user = data; console.log(data)})
    this.hallIds = this.user.bookedPartyHallIds;
    if(this.hallIds.length > 0) this.toShow = true; else this.toShow = false;
    this.userService.setActiveUser(this.user);
  }
  ngAfterViewInit(): void {
    this.userService.activeItem.subscribe((data: string)=>{this.userId = data; console.log(data)})
    this.userService.activeUser.subscribe((data: User)=>{this.user = data; console.log(data)})
  }
}
