import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ongoing',
  templateUrl: './ongoing.component.html',
  styleUrls: ['./ongoing.component.css']
})
export class OngoingComponent implements OnInit {

  events:any=[];

  constructor(public rest:RestService, private route:ActivatedRoute) { }

    ngOnInit() {
    this.rest.getOngoingEvent(this.route.snapshot.params['gamename']).subscribe((data: {}) => {
      console.log(data);
      this.events=data;
    })
  }

}
