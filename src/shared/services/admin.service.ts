import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Admin } from '../models/admin.model';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  public activeAdminId = new BehaviorSubject<string>("");
  public activeAdmin = new BehaviorSubject<Admin>({
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    phone: '',
    dob: '',
    img: ''
  })
  
  constructor(private http: HttpClient) { }

  setAdminId(value: string) {
    this.activeAdminId.next(value);
    this.getAdminById(value).subscribe((data: Admin)=>{
      console.warn(data);
      this.setActiveAdmin(data as Admin);
    });
  }
  setActiveAdmin(admin: Admin){
    this.activeAdmin.next(admin);
  }

  getAdminById(id: string): Observable<any>{
    return this.http.get<Admin>(baseURL + `/admin/getAdminById/${id}`);
  }
  
}
