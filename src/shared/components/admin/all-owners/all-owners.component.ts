import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/shared/models/admin.model';
import { Owner, PartyHall } from 'src/shared/models/user.model';
import { AdminService } from 'src/shared/services/admin.service';
import { OwnerServiceService } from 'src/shared/services/owner-service.service';
import { PartyHallService } from 'src/shared/services/party-hall.service';
import { UserServiceService } from 'src/shared/services/user-service.service';
import { ShowBookingsDialogComponent } from '../show-bookings-dialog/show-bookings-dialog.component';
import { ShowPartyhallDialogComponent } from '../show-partyhall-dialog/show-partyhall-dialog.component';

@Component({
  selector: 'app-all-owners',
  templateUrl: './all-owners.component.html',
  styleUrls: ['./all-owners.component.css']
})
export class AllOwnersComponent {


  dataSource!: Owner[];
  owners!: Owner[];
  displayedColumns = ['userId', 'name', 'email', 'phone', 'partyHalls'];
  constructor(private adminService: AdminService, private ownerService: OwnerServiceService, private activeRoute: ActivatedRoute, private router: Router, private partyService: PartyHallService, private userService: UserServiceService, private dialog: MatDialog) {
    // adminService.activeAdminId.subscribe((data: string)=>{this.id = data;})
    // adminService.activeAdmin.subscribe((data:Admin) => {this.admin = data; console.log(data)})

    ownerService.getAllOwners().subscribe((data: any) => {
      console.log(data)
      this.owners = data as Owner[];
      console.log(this.owners);
      this.dataSource = this.owners;
    });

    // openDialog(element: any){
    //   const dialogRef = this.dialog.open(ShowBookingsDialogComponent, {
    //     data:{
    //       element: element
    //     }
    //   })
    // }
  }
  openDialog(element: Owner){
    const dialogRef = this.dialog.open(ShowPartyhallDialogComponent, {
      data:{
        element: element
      }
    })
  }
}


