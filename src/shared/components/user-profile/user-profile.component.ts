import { Component } from '@angular/core';
import { User } from 'src/shared/models/user.model';
import { UserServiceService } from 'src/shared/services/user-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userDetails!: User;
  age!: number;
  constructor(userService: UserServiceService){
    userService.activeUser.subscribe((data: User)=>{
      this.userDetails = data;
      this.age = new Date().getFullYear() - (this.userDetails.dob.split('-')[0] as unknown as number); 
      // split('-')[0]
      console.log(this.userDetails);
    })

  }
}
