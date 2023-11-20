import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../constants/constants';
import { BehaviorSubject } from 'rxjs';
import { Owner, PartyHall } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerServiceService {
  
  public activeItem = new BehaviorSubject<string>('');
  public activeOwner = new BehaviorSubject<Owner>({
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    phone: '',
    dob: '',
    img: '',
    partyHallIds: []
  });
  public activePartyHall = new BehaviorSubject<any>({});

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/plain, */*',
      'Content-Type': 'application/json' // We send JSON
    }),
    responseType: 'text' as 'json'  // We accept plain text as response.
  };
  httpOptions2 = {
    headers: new HttpHeaders({
      // 'Accept': 'text/plain, */*',
      'Content-Type': 'application/json' // We send JSON
    }),
    
  };
  constructor(private http: HttpClient) { }

  getOwnerId(item: string) {
    this.activeItem.next(item);
    console.log(this.activeItem)
    this.getOwnerById(item).subscribe((data: Owner)=>{
      this.activeOwner.next(data as Owner);
    });
  }
  setActiveUser(owner: Owner){
    this.activeOwner.next(owner);
  }

  setActivePartyHall(partyHall: PartyHall){
    this.activePartyHall.next(partyHall as PartyHall);
  }

  getOwnerById(id: string): Observable<any>{
    return this.http.get<any>(baseURL + `/owner/getOwnerById/${id}`);
  }
  getPartyHallsByOwner(id: String) : Observable<any>{
    console.log(this.http.get<any>(baseURL + `/getPartyHallByOwner/${id}`).subscribe(data => console.log(data)));
    return this.http.get<any>(baseURL + `/getPartyHallByOwner/${id}`);
  }
  getAllOwners(): Observable<any>{
    return this.http.get<any>(baseURL + `/owner/getAllOwners`);
  }
}
