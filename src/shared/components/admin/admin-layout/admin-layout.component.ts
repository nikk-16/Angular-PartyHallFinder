import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/shared/services/admin.service';
import { OwnerServiceService } from 'src/shared/services/owner-service.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  constructor(private adminService: AdminService, private activeRoute: ActivatedRoute){
  }
  
  ngOnInit(){
    this.adminService.setAdminId(this.activeRoute.snapshot.params['id']);
  }
}
