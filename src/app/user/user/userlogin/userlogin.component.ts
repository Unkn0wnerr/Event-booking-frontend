import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { user } from '../../user';
import { Router } from '@angular/router';


@Component({
  selector: 'userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  loggedIn:boolean;
  logindetails:user=new user();
  validUser: user=new user;

  constructor(private loginservice:UserService,private router:Router) { }

  ngOnInit() {
    this.loginservice.currentLoginState.subscribe((result)=>{
      return this.loggedIn = result;
    });
   
  }



  userLogin(){

    this.loginservice.authenticate(this.logindetails).
    subscribe(data=>this.validUser=data as user);
    if(this.validUser.name!=null)
    {

     this.loginservice.changecurrentLoginState(true);
     this.loggedIn=!this.loggedIn;
     this.router.navigate(["user"]);

    }
  
  
   
   }


}
