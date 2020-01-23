import { Component, OnInit } from '@angular/core';
import { organization } from '../organization';
import { UserService } from 'src/app/user/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'orgregister',
  templateUrl: './orgregister.component.html',
  styleUrls: ['./orgregister.component.css']
})
export class OrgregisterComponent implements OnInit {

  registerUserData:organization=new organization();

  constructor(private userregisterService:UserService , private router:Router) { }

  ngOnInit() {
  }

  registerOrg() {
    this.userregisterService.registerOrg(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        
        this.router.navigate(['signup'])
      },
      err => console.log(err)
    )      
  }


}
