import { Component, OnInit } from '@angular/core';
import { organization } from '../organization';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'orglogin',
  templateUrl: './orglogin.component.html',
  styleUrls: ['./orglogin.component.css']
})
export class OrgloginComponent implements OnInit {

  loggedIn:boolean;
  logindetails:organization=new organization();
  validOrg: organization=new organization();

  constructor(private loginservice:UserService,private router:Router) { }

  ngOnInit() {
    this.loginservice.currentLoginState.subscribe(result=>this.loggedIn=result);
  }


  orgLogin(){

    this.loginservice.authenticateorg(this.logindetails).
    subscribe(data=>this.validOrg=data as organization);
    if(this.validOrg.orgName!=null)
    {

     this.loginservice.changecurrentLoginState(true);
     this.loggedIn=!this.loggedIn;
     this.router.navigate(["user"]);

    }
  
  
   
   }


}
