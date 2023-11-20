import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/shared/models/admin.model';
import { PartyHall, Owner, User } from 'src/shared/models/user.model';
import { AdminService } from 'src/shared/services/admin.service';
import { OwnerServiceService } from 'src/shared/services/owner-service.service';
import { PartyHallService } from 'src/shared/services/party-hall.service';
import { UserServiceService } from 'src/shared/services/user-service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  partyHalls!: PartyHall[]
  owners!: Owner[];
  users!: User[];
  id!: string;
  admin!: Admin;
  dataSource!: PartyHall[];
  displayedColumns = ['ownerId', 'partyHallName', 'street', 'city', 'prices', 'capacity', 'bookings'];
  constructor(private adminService: AdminService, private ownerService: OwnerServiceService, private activeRoute: ActivatedRoute, private router: Router, private partyService: PartyHallService, private userService: UserServiceService){
    adminService.activeAdminId.subscribe((data: string)=>{this.id = data;})
    adminService.activeAdmin.subscribe((data:Admin) => {this.admin = data; console.log(data)})
    partyService.getPartyHallsData().subscribe((data: any)=>{
      console.log(data)
      this.partyHalls = data as PartyHall[];
      console.log(this.partyHalls);
      this.dataSource = this.partyHalls;
    });
    ownerService.getAllOwners().subscribe((data: any)=>{
      console.log(data)
      this.owners = data as Owner[];
      console.log(this.owners);
    });
    userService.getAllUsers().subscribe((data: any) => {
      this.users = data as User[];
      console.log(this.users);
    })
    console.warn(this.id)
    adminService.getAdminById(this.id).subscribe((data: Admin)=>{
      this.admin = data as Admin;
      adminService.setActiveAdmin(this.admin);
    })

  }
  ngOnInit(): void {
  }
  addPartyHall(){
    // const id = this.activeRoute.snapshot.params['id'];
    this.router.navigate(['owner', this.id, 'addPartyHall']);
  }
}
