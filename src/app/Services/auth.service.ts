import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthAPI } from '../Interfaces/AuthAPI';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient, private router:Router) { }

  url:string = "https://localhost:7295/api/"

//  signIn(loginObj:any){
//     this.http.post<any>(`${this.url}login`,loginObj)
//  }

loginAPI(loginObj:any){
  return this.http.post<any>(`${this.url}Auth/login`,loginObj)
}




  storeToken(tokenValue:string){
    localStorage.setItem('token', tokenValue)
  }


  getToken(){
    return localStorage.getItem('token');
  }


 
  isLoggenIn():boolean{
    return !!localStorage.getItem('token')
  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['/']);
  }


}
