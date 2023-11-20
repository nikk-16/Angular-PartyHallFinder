import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { baseURL } from '../constants/constants';
import { Booking } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PartyHallService {
  
  
  
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/plain, */*',
      'Content-Type': 'application/json' 
    }),
    responseType: 'text' as 'json'  // We accept plain text as response.
  };
  httpOptions2 = {
    headers: new HttpHeaders({
      
      'Content-Type': 'application/json' // We send JSON
    }),
    
  };
  bookingConfirmed!: Booking;

  constructor(private http: HttpClient) { }

  getPartyHallsData(): Observable<any>{
    return this.http.get<any>(baseURL + '/getAllPartyHalls');
  }

  getPartyHallDataById(id: string): Observable<any>{
    return this.http.get<any>(baseURL + `/getPartyHallById/${id}`);
  }

  setViewingId(userId: string,id: string): Observable<any> {
    console.log(`http://localhost:8080/user/updateViewingId/${userId}/${id}`)
    return this.http.post<any>(baseURL + `/user/updateViewingId/${userId}/${id}`, 'user/updateViewingId', this.httpOptions);
  }
  getViewingId(userId:string ): Observable<any> {
    return this.http.get<any>(baseURL + `/user/getViewingId/${userId}`, this.httpOptions);
  }

  filterData(location: any, guests: any, date: any, budget: any):Observable<any> {
    return this.http.get<any>(baseURL + `/filter?location=${location}&guests=${guests}&date=${date}&budget=${budget}`);
  }
  book( arg1: String, arg2: String, guests: number, payment_id: string, amount: number, date: string, phone: number) {
    return this.http.post<any>(baseURL + `/book/bookHall/${arg1}/${arg2}?guests=${guests}&payment_id=${payment_id}&amount=${amount}&date=${date}&contact=${phone}`, this.httpOptions2)
  }
  getBookingById(id: string): Observable<Booking>{
    return this.http.get<Booking>(baseURL + `/book/getBookingById/${id}`);
  }

  addPartyHallData(id: string, arg1: any) {
    return this.http.post<any>(baseURL + `/addPartyHall/${id}`, arg1, this.httpOptions);
  }
  updatePartyHallData(id: string, arg1: any) {
    return this.http.post<any>(baseURL + `/update/${id}`, arg1, this.httpOptions);
  }

  submitRating(rating: number, pId: string, uId: string): Observable<any> {
    return this.http.post<any>(baseURL + `/addRating/${rating}/${pId}/${uId}`, this.httpOptions);

  }

  submitReview(args: any): Observable<any> {
    return this.http.post<any>(baseURL + `/reviews/addReview`, args, this.httpOptions);
  }


  shareOnFacebook(shareUrl: string) {
    shareUrl = encodeURIComponent(shareUrl);
    console.log(shareUrl);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, 'sharer');
  }
 
  shareOnTwitter(shareUrl: string, desc: string) {
    shareUrl = encodeURIComponent(shareUrl);
    desc = encodeURIComponent(desc);
    window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${desc} ${shareUrl}`, 'sharer');
  }
 
  shareOnGooglePlus(shareUrl: string) {
    shareUrl = encodeURIComponent(shareUrl);
    window.open(`https://plus.google.com/share?url=${shareUrl}`, 'sharer');
  }
 
  shareOnPinterest(shareUrl: string, img: string, desc: string) {
    shareUrl = encodeURIComponent(shareUrl);
    img = encodeURIComponent(img);
    desc = encodeURIComponent(desc);
    window.open(`https://www.pinterest.com/pin/create/button?url=${shareUrl}&media=${img}&description=${desc}`, 'sharer');
  }
}











