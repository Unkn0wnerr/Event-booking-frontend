import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  events:any=[];

  constructor(public rest:RestService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.rest.getPastEvent(this.route.snapshot.params['gamename']).subscribe((data: {}) => {
      console.log(data);
      this.events=data;
    })
  }

}
