import { Component, OnInit } from '@angular/core';
import { organization } from '../organization';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'orglogin',
  templateUrl: './orglogin.component.html',
  styleUrls: ['./orglogin.component.css']
})
export class OrgloginComponent implements OnInit {

  //loggedIn:boolean;
  //logindetails:organization=new organization();
  //validOrg: organization=new organization();
  //aa:any;

  model: any = {};
  loading = false;
  returnUrl: string;
  error = '';


  constructor(private loginservice:UserService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  //orgLogin(){
  //  this.aa=this.loginservice.authenticateorg({orgEmail:this.logindetails.orgEmail,
   // orgPassword:this.logindetails.orgPassword});
   // console.log(this.aa);
   // sessionStorage.setItem('orgEmail',"org");
   // this.loginservice.changecurrentLoginState(true);
   // this.router.navigate(["organization"]);
 // }
/*
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
 */

login() {
  this.loading = true;
  this.loginservice.authenticateorg(this.model.orgEmail, this.model.orgPassword).pipe(first())
      .subscribe(
          data => {
            sessionStorage.setItem('orgEmail',data.orgEmail);
              this.router.navigate([this.returnUrl]);
          },
          error => {
              this.error = error;
              this.loading = false;
          });
        }
}
