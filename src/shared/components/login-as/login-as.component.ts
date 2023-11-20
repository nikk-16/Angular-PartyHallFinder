import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-as',
  templateUrl: './login-as.component.html',
  styleUrls: ['./login-as.component.css']
})
export class LoginAsComponent {

  constructor(private activeRoute: ActivatedRoute, private router: Router){

  }
  loginAsUser(){
    this.router.navigate(['login', 'user']);
  }
  loginAsVendor(){
    this.router.navigate(['login', 'owner']);
  }
  loginAsAdmin(){
    this.router.navigate(['login', 'admin']);
  }
}