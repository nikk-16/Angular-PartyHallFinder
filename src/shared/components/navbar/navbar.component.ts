import { Component, EventEmitter, Output } from '@angular/core';
import { UserServiceService } from 'src/shared/services/user-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // @Output() planning = new EventEmitter<string>();
  showSidebar = false;
  showLoginForm: boolean = true;
  isLoginMode: boolean = true;
  email='';
  password='';
  userId!: string;
  constructor(private userService: UserServiceService){
    userService.activeItem.subscribe((data: string)=>{this.userId = data; console.log(data)})
  }
  

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
  // emit(e: Event){
  //   this.planning.emit('hello');
  // }
}

