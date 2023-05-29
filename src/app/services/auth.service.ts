import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  private baseUrl:string ="https://localhost:7056/api/User/";

  constructor(private http:HttpClient) { }

  ngOnInit(): void {   
  }

  login(loginData:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginData)
  }

  signUp(signData:any){
    return this.http.post<any>(`${this.baseUrl}register`,signData);
  }
}
