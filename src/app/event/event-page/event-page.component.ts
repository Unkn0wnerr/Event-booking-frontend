import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {


  events:any=[];
  constructor(public rest:RestService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.rest.getEventDetails(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.events=data;
  })
  }

}
