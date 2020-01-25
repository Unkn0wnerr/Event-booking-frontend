import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { organization } from '../organization/organization';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl='http://localhost:7070/EventBooking/user';
private loginUrl='http://localhost:7070/EventBooking/user/validate';
private loginorgUrl='http://localhost:7070/EventBooking/org/validate';
private baseorgUrl='http://localhost:7070/EventBooking/org';

private loggedIn= new BehaviorSubject<boolean>(false);
currentLoginState=this.loggedIn.asObservable();


constructor(private http:HttpClient ) { }


isUserLoggedIn() {
  let user = sessionStorage.getItem('userEmail');
  //console.log(!(user === null))
  return !(user === null)
}
isOrgLoggedIn(){
  let org = sessionStorage.getItem('orgEmail');
  return !(org === null);
}

logOut() {
  sessionStorage.removeItem('orgEmail');
  sessionStorage.removeItem('userEmail');
}


getUserById(aa:any):Observable<any>
{
  return this.http.get(this.baseUrl+"/"+aa);

}
getAllUser():Observable<any>
{
  return this.http.get(this.baseUrl+"/list");
}

data:User=new User();
authenticate(value:any):Observable<any>
{
  return this.http.post(`${this.loginUrl}`,value).pipe(tap(usr=>{
      this.data=usr as User;
      sessionStorage.setItem('name',this.data.name);
      console.log(usr);}));
}
data1:organization=new organization();
authenticateorg(value:any):Observable<any>
{
  return this.http.post(`${this.loginorgUrl}`,value).pipe(tap(org=>{
    this.data1=org as organization;
    sessionStorage.setItem('name',this.data1.orgName);
    console.log(org);
  }));
}

changecurrentLoginState(state:boolean)
{    
  this.loggedIn.next(state);
}

registerUser(user:User)
{
  return this.http.post<any>(this.baseUrl+"/register",user);
}



registerOrg(organization: any)
{
  return this.http.post<any>(this.baseorgUrl+"/register",organization);
}



}
