import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';
import { Router } from '@angular/router';


@Component({
  selector: 'userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  loggedIn:boolean;
  logindetails:User=new User();
  validUser:User=new User();
  userman:User=new User();
  aa:any;



  constructor(private loginservice:UserService,private router:Router) { }

  ngOnInit() {
    this.loginservice.currentLoginState.subscribe((result)=>{
      return this.loggedIn = result;
    });
   
  }



  userLogin(){

    
    this.aa=this.loginservice.authenticate({
      userEmail:this.logindetails.userEmail
      ,password:this.logindetails.password});
    console.log(this.aa);
    console.log(this.aa.name);
    console.log("kk"+this.aa.userEmail);
    sessionStorage.setItem('userEmail',"user");
    this.loginservice.changecurrentLoginState(true);
    this.router.navigate(["user"]);    
      
    

   }
}
