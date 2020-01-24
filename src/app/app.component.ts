import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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

