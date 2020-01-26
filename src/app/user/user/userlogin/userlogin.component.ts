import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../user';
import { Router,ActivatedRoute } from '@angular/router';

import { first } from 'rxjs/operators';


@Component({
  selector: 'userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  //loggedIn:boolean;
  //logindetails:User=new User();
  //validUser:User=new User();
  //userman:User=new User();
  //aa:any;

  model: any = {};
  loading = false;
  returnUrl: string;
  error = '';



  constructor(private loginservice:UserService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
   // this.loginservice.currentLoginState.subscribe((result)=>{
   //   return this.loggedIn = result;
   // });
   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
   
  }



 // userLogin(){

    
    //this.aa=this.loginservice.authenticate({
    //  userEmail:this.logindetails.userEmail
     // ,password:this.logindetails.password});
    //console.log(this.aa);
    //console.log(this.aa.name);
    //console.log("kk"+this.aa.userEmail);
    //sessionStorage.setItem('userEmail',"user");
    //this.loginservice.changecurrentLoginState(true);
   // this.router.navigate(["user"]);    
      
   //}
   




   login() {
    this.loading = true;
    this.loginservice.authenticate(this.model.userEmail, this.model.password).pipe(first())
        .subscribe(
            data => {
              sessionStorage.setItem('userEmail',data.userEmail);
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
}

}
