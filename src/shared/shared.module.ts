import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from '../app/app-routing.module';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { OwnerProfileComponent } from './components/owner-profile/owner-profile.component';
import { UserMessageComponent } from './components/messages/user-message/user-message.component';
import { OwnerMessagesComponent } from './components/messages/owner-messages/owner-messages.component';
import { OwnerShowBookingCardComponent } from './components/owner-show-booking-card/owner-show-booking-card.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TableModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule
  ]
})
export class SharedModule { }
