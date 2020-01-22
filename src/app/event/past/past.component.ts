import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {

  events:any=[];

  constructor(public rest:RestService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.rest.getPastEvent(this.route.snapshot.params['gamename']).subscribe((data: {}) => {
      console.log(data);
      this.events=data;
    })
  }

}
