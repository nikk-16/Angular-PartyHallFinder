import { Time } from "@angular/common";

export interface Credentials {
    email: string;
    password: string;
  }
export interface User{
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    phone: string;
    dob: string;
    img: string;
    bookedPartyHallIds: string[];
    searches: string[];
  }

  export interface Owner{
    id: string;
    lastName: string;
    firstName: string;
    email: string;
    img: string;
    dob: string;
    phone: string;
    password: string;
    partyHallIds: string[];
  }
  export interface PartyHall{
    partyHallId: string;
    ownerId: string;
    partyHallName: string;
    capacity: number;
    prices: number;
    pincode: number;
    state: string;
    city: string;
    street: string;
    features: Features;
//    private Availability availability;
    bookedDates: BookedDates[];
    reviews: Reviews[];
    bookings: Booking[];
    images: string[];
    ratings: number;
    total: number;
    latitudes: number;
    longitudes: number;
  }


  export interface BookedDates{
    date: string;
    partyHallId: string;
    userId: string;
  }
  export interface Reviews {
    reviewId: string;
    partyHallId: string;
    userId: string;
    rating: number;
    time: string;
    userName: string;
    reviewText: string;
    replies: string[];
}
export interface Booking {
    bookingId: string;
    partyHallId: string;
    userId: string;
    guests: number;
    date: string;
    payment: number;
    paymentId: string;
    contact: string;
    paymentStatus: boolean;
    bookingStatus: boolean;
}

export interface Features {
    hall: boolean;
    conferenceRoom: boolean;
    poolSide: boolean;
    garden: boolean;
    lawn: boolean;
    veg : number;
    nonVeg : number;
}
export interface Capacity{
    isThere: boolean;
    maxCapacity: number;
    seating: number;
}
export interface Price{
    isThere: boolean;
    amount: number;
}
export interface Location {
     pincode: number;
    state: string;
    city: string;
    street: string;
    number: string;
    floor: string;
    latitude: string;
    longitude: string;
}

export interface Search {
    dateStart: Date;
    location: Location;
    capacity: number;
    budget: number;
    amenities: string[];
}

export interface SingupDetails { 
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    dob: string;
    img: string;
}
