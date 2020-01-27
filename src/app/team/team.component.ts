import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  registerUserData:Team=new Team();

  constructor(private userregisterService:UserService, private router:Router ) { }

  ngOnInit() {
  }

  registerUser() {
    let data=sessionStorage.getItem('user');
    console.log(data);
    this.userregisterService.registerTeam(this.registerUserData)
    .subscribe(
      res => {
       
        this.router.navigate(['event'])
      },
      err => console.log(err)
    )      
  }

}
