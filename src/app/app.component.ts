import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event-booking-frontend';
vdata:boolean=true;


  showV(){
  this.vdata=!this.vdata;
  }


}
