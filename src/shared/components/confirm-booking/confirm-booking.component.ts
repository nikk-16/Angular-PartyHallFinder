import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DisplayVenueComponent } from '../display-venue/display-venue.component';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css'],
  template:`<div class="p-5">
  <h1>Booking Confirmed!</h1>
  <hr>
  <h4>Booking Id: {{datas.bookingId}}</h4>
  <h4>Payment Id: {{datas.paymentId}}</h4>
  <button mat-button mat-dialog-close type="submit" class="btn btn-danger">Close</button>
</div>`,
})
export class ConfirmBookingComponent implements OnInit{
  bookingId!: string;
  paymentId!: string;
  data: any = '123';
  constructor(public dialogRef: MatDialogRef<DisplayVenueComponent>, @Inject(MAT_DIALOG_DATA) public datas: any) {
    this.data = datas;
    console.log(this.data)
    this.bookingId = this.data.bookingId;
    this.paymentId = this.data.paymentId;
  }
  ngOnInit(): void {
    
  }
}
