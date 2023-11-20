import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVenuesComponent } from 'src/shared/components/list-venues/list-venues.component';

import { LandingPageComponent } from 'src/shared/components/landing-page/landing-page.component';

import { LoginSidebarComponent } from '../shared/components/login-sidebar/login-sidebar.component';
import { UserProfileComponent } from '../shared/components/user-profile/user-profile.component';
import { DisplayVenueComponent } from '../shared/components/display-venue/display-venue.component';
import { LayoutComponent } from 'src/shared/components/layout/layout.component';
import { OwnerDashboardComponent } from 'src/shared/components/owner-dashboard/owner-dashboard.component';
import { AddHallComponent } from 'src/shared/components/add-hall/add-hall.component';
import { UpdatePartyHallComponent } from 'src/shared/components/update-party-hall/update-party-hall.component';
import { OwnerPartyhallViewComponent } from 'src/shared/components/owner-partyhall-view/owner-partyhall-view.component';

import { HomeComponent } from 'src/shared/components/home/home.component';
import { UserBookingsComponent } from 'src/shared/components/user-bookings/user-bookings.component';
import { LoginAsComponent } from 'src/shared/components/login-as/login-as.component';
import { AdminHomeComponent } from 'src/shared/components/admin/admin-home/admin-home.component';
import { AdminLayoutComponent } from 'src/shared/components/admin/admin-layout/admin-layout.component';
import { AllUsersComponent } from 'src/shared/components/admin/all-users/all-users.component';
import { AllPartyHallComponent } from 'src/shared/components/admin/all-party-hall/all-party-hall.component';
import { AllOwnersComponent } from 'src/shared/components/admin/all-owners/all-owners.component';
import { AdminProfileComponent } from 'src/shared/components/admin/admin-profile/admin-profile.component';
import { OwnerProfileComponent } from 'src/shared/components/owner-profile/owner-profile.component';

const routes: Routes = [
  {
    path: '',
    component: LoginAsComponent
  },
  {
    path: 'login/:role',
    component: LoginSidebarComponent
  },
  
  {
    path: 'user/:id',
    component: LandingPageComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'halls', component: ListVenuesComponent },
      { path: 'display/:partyHallId', component: DisplayVenueComponent },
      { path: 'bookings', component: UserBookingsComponent },
      { path: 'profile', component: UserProfileComponent },

    ]
  },
  {
    path: 'owner/:id',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: OwnerDashboardComponent },
      { path: 'addPartyHall', component: AddHallComponent },
      { path: 'updatePartyHall/:partyHallId', component: UpdatePartyHallComponent },
      { path: 'partyHall/:partyHallId', component: OwnerPartyhallViewComponent },
      { path: 'profile', component: OwnerProfileComponent },
    ]
  },
  {
    path: 'admin/:id',
    component: AdminLayoutComponent,
    children: [
      { path: 'home', component: AdminHomeComponent },
      { path: 'users', component: AllUsersComponent },
      { path: 'partyHalls', component: AllPartyHallComponent },
      { path: 'owners', component: AllOwnersComponent },
      { path: 'profile', component: AdminProfileComponent }, 
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
