import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { user } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData:user=new user();

  constructor(private userregisterService:UserService , private router:Router) { }

  ngOnInit() {
  }

  registerUser() {
    this.userregisterService.registerUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        
        this.router.navigate(['userlogin'])
      },
      err => console.log(err)
    )      
  }

}