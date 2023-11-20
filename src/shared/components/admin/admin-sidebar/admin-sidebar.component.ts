import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/shared/models/admin.model';
import { AdminService } from 'src/shared/services/admin.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {
  // selectedItem!: string;
  id!: string;
  admin! : Admin;
  selectedItem = 'dashboard';
  constructor(private activeRoute: ActivatedRoute, private adminService: AdminService, private router : Router){
    // this.selectedItem = 'dashboard';
    this.id = activeRoute.snapshot.params['id'];
  }
  ngOnInit(){
  }
  selectItem(item: string) {
    this.selectedItem = item;
  }
}
