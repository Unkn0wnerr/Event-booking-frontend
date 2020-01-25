import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'eventregister',
  templateUrl: './eventregister.component.html',
  styleUrls: ['./eventregister.component.css']
})
export class EventregisterComponent implements OnInit {

  registerEventData:Event=new Event();
  constructor(private eventregisterService:UserService , private router:Router) { }

  ngOnInit() {
  }

  registerUser() {
    this.eventregisterService.registerEvent(this.registerEventData)
    .subscribe(
      res => {
               
        this.router.navigate(['event'])
      },
      err => console.log(err)
    )      
  }

}
