import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking, PartyHall, Reviews, User } from 'src/shared/models/user.model';
import { PartyHallService } from 'src/shared/services/party-hall.service';
import { WindowRefService } from 'src/shared/services/window-ref.service';
import * as bootstrap from 'bootstrap';
import { ConfirmBookingComponent } from '../confirm-booking/confirm-booking.component';
import { MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { UserServiceService } from 'src/shared/services/user-service.service';
import { DatePipe } from '@angular/common';
import * as L from 'leaflet';


@Component({
  selector: 'app-display-venue',
  templateUrl: './display-venue.component.html',
  styleUrls: ['./display-venue.component.css'],
  providers: [WindowRefService, DatePipe]
})
export class DisplayVenueComponent {
  bookingForm!: FormGroup;
  id!: string;
  partyHall!: PartyHall;
  disabled = true;
  reload = true;
  booking!: Booking;
  doBooking!: Booking;
  latitude!: string;
  longitude!: string;
  src!: string;
  paymentId!: string;
  bookingConfirmed!: Booking;
  userId!: string;

  bookedDates!: Date[];
  dateValue: Date = new Date();
  date!: FormControl;
  showCalendar = false;
  url!: string;
  starRating = 0;
  user!: User;
  reviewForm = new FormControl('');
  reviews!: Reviews[];

  private map!: L.Map;
  private centroid: L.LatLngExpression = [20.593683, 78.8877]; 

  private initMap(): void {
    this.centroid = [this.partyHall.latitudes, this.partyHall.longitudes]


    this.map = L.map('map', {
      center: this.centroid,
      zoom: 13
    });


    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 2,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

      console.log(this.partyHall.latitudes)
      const location = [this.partyHall.latitudes, this.partyHall.longitudes];
      console.warn(location)
      const marker = L.marker(location as L.LatLngExpression);
      marker.addTo(this.map);
    tiles.addTo(this.map);


  
  }


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private partyHallService: PartyHallService, private winRef: WindowRefService, private dialog: MatDialog, private userService: UserServiceService, private datePipe: DatePipe) {
    userService.activeItem.subscribe((data: string)=>{this.userId = data; console.log(data)});
    userService.activeUser.subscribe((data: User)=>{console.log(data); this.user = data});
    this.date = new FormControl(new Date());
    this.activatedRoute.url.subscribe(value=> this.url = value.toString());
    userService.getReview(this.userId).subscribe((data: any) => {
      if(data.rating == null || data.rating == undefined) this.starRating = 0;
      else this.starRating = data.rating;
    })
    userService.getAllReviews().subscribe((data: any) => {
      this.reviews = data as Reviews[];
    })
  }


  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['partyHallId'];
    this.partyHallService.getPartyHallDataById(this.id).subscribe((data: any) => {
      this.partyHall = data as PartyHall;
      console.warn(this.partyHall)
      this.initMap();
    });
    this.bookingForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      guests: new FormControl(100, Validators.required)
    });
  }
  ngAfterViewInit() {
    this.src = `https://maps.google.com/maps?width=800&amp;height=700&amp;hl=en&amp;q=${this.partyHall.street},${this.partyHall.city},${this.partyHall.state}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`
  }


  scroll() {
    document.getElementById("form")?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }


  createRzpayOrder() {
    this.payWithRazor();
  }

  payWithRazor() {
    const amount = this.partyHall.prices * this.bookingForm.value.guests * 100;
    const options = {
      "key": "rzp_test_UHsR0lIAjZhxPI", // Enter the Key ID generated from the Dashboard
      "amount": `${amount}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Nikhil Chaurasiya", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": (response: { razorpay_payment_id: any; razorpay_order_id: any; razorpay_signature: any; }) => {
        this.paymentId = response.razorpay_payment_id as string;
        this.bookingComplete(amount);
      },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "Nikhil chaurasiya", //your customer's name
        "email": "nikhilchaurasiya16401@gmail.com",
        "contact": "8692080859"  //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    rzp.on('payment.failed', function (response: { error: { code: any; description: any; source: any; step: any; reason: any; metadata: { order_id: any; payment_id: any; }; }; }) {
      alert(response.error.description);
      alert(response.error.metadata.payment_id);
    });

    rzp.open();
  }



  bookingComplete(amount: number) {

    this.partyHallService.book(this.userId, this.id, this.bookingForm.value.guests, this.paymentId, amount, this.bookingForm.value.date, this.bookingForm.value.phone).subscribe((data: any) => {
      this.bookingConfirmed = data as Booking;
      // setTimeout(()=>{
      this.userService.getUserById(this.userId).subscribe((data: User)=>{ console.warn(data); this.userService.setActiveUser(data) });

      const dialogRef = this.dialog.open(ConfirmBookingComponent, {
        data: {
          bookingId: this.bookingConfirmed.bookingId,
          paymentId: this.bookingConfirmed.paymentId
        },
        width: '50vw',
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(()=>{
        this.router.navigate(['user', this.userId, 'bookings']);
        // this.router.navigate(['bookings']);
      })
      // }, 2000)
    });
  }



  disabledDate(args: any): void {
    for(let i = 0; i < this.partyHall.bookedDates.length; i++){
      const [year, month, day] = this.partyHall?.bookedDates[i].date.split('-');

      const bDate = new Date(+year, +month - 1, +day);
      if (args.date.getDate() === bDate.getDate()) {
          //set 'true' to disable the weekends
          args.isDisabled = true;
      }
      // this.bookedDates.push(new Date(bDate));
    }
  }
  onChange(args: any): void {
    this.bookingForm.setValue({ ...this.bookingForm.value, date: this.transformDate(args.value) });

  }
  transformDate(date: Date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }

  submitRating(){
    // this.userService.activeItem.subscribe((data: string)=>{uId = data})

    this.partyHallService.submitRating(this.starRating, this.partyHall.partyHallId, this.userId).subscribe((data: any)=>{

      this.partyHall = data;
    });
  }


  submitReview(){
    const args = {reviewText: this.reviewForm.value, userId: this.userId, partyHallId: this.id, time: new Date().getTime(), rating: this.starRating, replies: [], userName: this.user.firstName + ' ' + this.user.lastName };

    this.partyHallService.submitReview(args).subscribe((data: any)=>{

      this.partyHall = data as PartyHall;
    })
  }




  shareOnFacebook() {
    this.partyHallService.shareOnFacebook(this.url);
    
  }
 
  shareOnTwitter() {
    this.partyHallService.shareOnTwitter(this.url, `See this PartyHall which is located ${this.partyHall.street}, ${this.partyHall.city}, ${this.partyHall.state} where it has ${this.partyHall.capacity}  capacity and it costs ${this.partyHall.prices} per head per day` )
  }
 
  shareOnGoogle() {
    this.partyHallService.shareOnGooglePlus(this.url)
  }
 
  shareOnPinterest() {
    this.partyHallService.shareOnPinterest(this.url, this.partyHall.images[0], `See this PartyHall which is located at:  ${this.partyHall.street}, ${this.partyHall.city}, ${this.partyHall.state} where it has ${this.partyHall.capacity} capacity and it costs ${this.partyHall.prices} per head per day`);
  }


}


