import { Component } from '@angular/core';
import { Admin } from 'src/shared/models/admin.model';
import { AdminService } from 'src/shared/services/admin.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
  adminDetails!: Admin;
  age!: number;
  constructor(adminService: AdminService){
    adminService.activeAdmin.subscribe((data: Admin)=>{
      this.adminDetails = data;
      this.age = new Date().getFullYear() - (this.adminDetails.dob.split('-')[0] as unknown as number); 

      console.log(this.adminDetails);
    })

  }
}
