import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/shared/services/user-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  
  

  constructor(private userService: UserServiceService, private activeRoute: ActivatedRoute){

  }
  ngOnInit(){
    this.userService.setUserId(this.activeRoute.snapshot.params['id']);
    console.log(this.userService.activeItem);
  }
  
  
  // public scrollToPlanning() {
  //   document.getElementById("planning")?.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //       inline: 'nearest'
  //   });
  // }
}
