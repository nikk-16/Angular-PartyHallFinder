import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/shared/models/user.model';
import { UserServiceService } from 'src/shared/services/user-service.service';
import { ShowBookingsDialogComponent } from '../show-bookings-dialog/show-bookings-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  users!: User[];
  dataSource!: MatTableDataSource<Element>;
  displayedColumns = ['userId', 'name', 'email', 'phone', 'bookings'];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  
  
  constructor(private userService: UserServiceService, private dialog: MatDialog){
    userService.getAllUsers().subscribe((data: any) => {
      this.users = data as User[];
      console.log(this.users);
      this.dataSource = new MatTableDataSource<Element>(data);
      console.log(this.dataSource)
      // this.dataSource = this.users;
    })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(element: User){
    const dialogRef = this.dialog.open(ShowBookingsDialogComponent, {
      data:{
        element: element
      }
    })
  }

}
