import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService:UserService) { }
  ngOnInit(): void {
    this.detail=true;
  }
  title = 'Event-booking-frontend';
vdata:boolean=true;
home:boolean=false;
detail:boolean=true;


  showV(){
  this.vdata=true;
 this.detail=!this.detail;
  }
  showData()
  {
    this.detail=false;
    this.vdata=false;
    this.home=!this.home;
  }


}
