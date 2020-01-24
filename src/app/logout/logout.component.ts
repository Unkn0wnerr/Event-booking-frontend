import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private loginservice:UserService,
    private router:Router) { }

  ngOnInit() {
    this.loginservice.logOut();
    this.router.navigate(['']);
  }

}
