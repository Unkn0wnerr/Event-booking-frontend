import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { user } from '../../user';


@Component({
  selector: 'userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  loggedIn:boolean;
  logindetails:user=new user();
  validUser: boolean=false;

  constructor(private loginservice:UserService) { }

  ngOnInit() {
    this.loginservice.currentLoginState.subscribe(result=>this.loggedIn=result);
   
  }



  userLogin(){
    this.loginservice.authenticate(this.logindetails).
    subscribe(data=>this.validUser=data as boolean);
    if(this.validUser==true)
    {
     this.loginservice.changecurrentLoginState(this.validUser);
    }
  
  
   
   }


}
