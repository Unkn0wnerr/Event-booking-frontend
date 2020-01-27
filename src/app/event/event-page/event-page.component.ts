import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent implements OnInit {

 public tokenKey: string='event_token';
  events:any=[];
  constructor(public rest:RestService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {

    this.rest.getEventDetails(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.events=data;

     
  })
  }

  onSelect(){
    this.router.navigate(['/ticket']);
}




}
