import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events=[
    {"name": "CSGO"},
    {"name": "DOTA"}
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSelect(event:any){
      this.router.navigate(['/event', event.name])
  }

}