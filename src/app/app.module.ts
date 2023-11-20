import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { LandingPageComponent } from 'src/shared/components/landing-page/landing-page.component';
import { ListVenuesComponent } from 'src/shared/components/list-venues/list-venues.component';
import { FooterComponent } from 'src/shared/components/footer/footer.component';
import { LoginSidebarComponent } from 'src/shared/components/login-sidebar/login-sidebar.component';
import { DisplayVenueComponent } from 'src/shared/components/display-venue/display-venue.component';
import { ShowVenueComponent } from 'src/shared/components/show-venue/show-venue.component';
import { UserProfileComponent } from 'src/shared/components/user-profile/user-profile.component';
import { VenueCardComponent } from 'src/shared/components/venue-card/venue-card.component';
import { VenueDetailCardComponent } from 'src/shared/components/venue-detail-card/venue-detail-card.component';
import { ConfirmBookingComponent } from 'src/shared/components/confirm-booking/confirm-booking.component';
import { OwnerHallsComponent } from 'src/shared/components/owner-halls/owner-halls.component';
import { OwnerDashboardComponent } from 'src/shared/components/owner-dashboard/owner-dashboard.component';
import { SidebarComponent } from 'src/shared/components/sidebar/sidebar.component';
import { TopbarComponent } from 'src/shared/components/topbar/topbar.component';
import { LayoutComponent } from 'src/shared/components/layout/layout.component';
import { OwnerVenueDetailCardComponent } from 'src/shared/components/owner-venue-detail-card/owner-venue-detail-card.component';
import { AddHallComponent } from 'src/shared/components/add-hall/add-hall.component';
import { UpdatePartyHallComponent } from 'src/shared/components/update-party-hall/update-party-hall.component';
import { OwnerPartyhallViewComponent } from 'src/shared/components/owner-partyhall-view/owner-partyhall-view.component';
import { HomeComponent } from 'src/shared/components/home/home.component';
import { UserBookingsComponent } from 'src/shared/components/user-bookings/user-bookings.component';
import { UserBookingCardComponent } from 'src/shared/components/user-booking-card/user-booking-card.component';
import { LoginAsComponent } from 'src/shared/components/login-as/login-as.component';
import { AdminHomeComponent } from 'src/shared/components/admin/admin-home/admin-home.component';
import { AdminLayoutComponent } from 'src/shared/components/admin/admin-layout/admin-layout.component';
import { AdminSidebarComponent } from 'src/shared/components/admin/admin-sidebar/admin-sidebar.component';
import { AllPartyHallComponent } from 'src/shared/components/admin/all-party-hall/all-party-hall.component';
import { AllUsersComponent } from 'src/shared/components/admin/all-users/all-users.component';
import { ShowBookingsDialogComponent } from 'src/shared/components/admin/show-bookings-dialog/show-bookings-dialog.component';
import { AllOwnersComponent } from 'src/shared/components/admin/all-owners/all-owners.component';
import { ShowPartyhallDialogComponent } from 'src/shared/components/admin/show-partyhall-dialog/show-partyhall-dialog.component';
import { ReviewCardComponent } from 'src/shared/components/review-card/review-card.component';
import { OwnerShowBookingCardComponent } from 'src/shared/components/owner-show-booking-card/owner-show-booking-card.component';
import { AdminProfileComponent } from 'src/shared/components/admin/admin-profile/admin-profile.component';
import { OwnerMessagesComponent } from 'src/shared/components/messages/owner-messages/owner-messages.component';
import { UserMessageComponent } from 'src/shared/components/messages/user-message/user-message.component';
import { OwnerProfileComponent } from 'src/shared/components/owner-profile/owner-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    ListVenuesComponent,
    FooterComponent,
    LoginSidebarComponent,
    VenueCardComponent,
    ShowVenueComponent,
    DisplayVenueComponent,
    UserProfileComponent,
    VenueDetailCardComponent,
    ConfirmBookingComponent,
    OwnerHallsComponent,
    OwnerDashboardComponent,
    SidebarComponent,
    TopbarComponent,
    LayoutComponent,
    OwnerVenueDetailCardComponent,
    AddHallComponent,
    UpdatePartyHallComponent,
    OwnerPartyhallViewComponent,
    HomeComponent,
    UserBookingsComponent,
    UserBookingCardComponent,
    LoginAsComponent,
    AdminHomeComponent,
    AdminLayoutComponent, 
    AdminSidebarComponent,
    AllPartyHallComponent,
    AllUsersComponent,
    ShowBookingsDialogComponent,
    AllOwnersComponent,
    ShowPartyhallDialogComponent,
    ReviewCardComponent,
    OwnerShowBookingCardComponent,
    AdminProfileComponent,
       OwnerProfileComponent,
       UserMessageComponent,
       OwnerMessagesComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
