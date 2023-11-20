import { Injectable } from '@angular/core';
import { Credentials, SingupDetails, User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  

  public activeItem = new BehaviorSubject<string>('');
  public activeUser = new BehaviorSubject<User>({
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    phone: '',
    dob: '',
    img: '',
    bookedPartyHallIds: [],
    searches: []
  });
  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'text/plain, */*',
      'Content-Type': 'application/json' 
    }),
    responseType: 'text' as 'json'  // We accept plain text as response.
  };

  constructor(private http: HttpClient) { }

  setUserId(item: string) {
    this.activeItem.next(item);
    console.log(this.activeItem)
    this.getUserById(item).subscribe((data: User)=>{
      this.activeUser.next(data as User);
    });
  }
  setActiveUser(user: User){
    this.activeUser.next(user);
  }

  getLoginUser(body: Credentials, params: string): Observable<any>{
    console.log(params);
    return this.http.post<any>(baseURL + `/${params}/signin`, body);
  }

  signupUser(body: SingupDetails, params: string) {
    return this.http.post<any>(baseURL + `/${params}/signup`, body);
  }

  getUserById(id: string): Observable<User>{
    // this.http.get<User>(baseURL + `/user/getUserById/${id}`).subscribe((data: User)=>{  console.log(data)});
    return this.http.get<User>(baseURL + `/user/getUserById/${id}`);
  }

  getAllUsers(): Observable<any>{
    return this.http.get<User[]>(baseURL + `/user/getAll`);
  }

  getReview(uId: string): Observable<any>{
    return this.http.get<any>(baseURL + `/reviews/getByUserId/${uId}`);
  }

  getAllReviews(): Observable<any>{
    return this.http.get<any>(baseURL + `/reviews/getAll`);
  }

  
}
