import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { user } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl='http://localhost:7070/EventBooking/user';


private loggedIn= new BehaviorSubject<boolean>(false);
currentLoginState=this.loggedIn.asObservable();


constructor(private http:HttpClient ) { }

getUserById(aa:any):Observable<any>
{
  return this.http.get(this.baseUrl+"/"+aa);

}
getAllUser():Observable<any>
{
  return this.http.get(this.baseUrl+"/list");

}

authenticate(value:user):Observable<any>
{
  return this.http.get(this.baseUrl+"/validate"+"/"+value.userEmail+"/"+value.password);
}

changecurrentLoginState(state:boolean)
{    
  this.loggedIn.next(state);
}



}
