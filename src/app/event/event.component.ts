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
    let data=sessionStorage.getItem('user');
    console.log(data);
  }

  onSelect(event:any){
      this.router.navigate(['/event', event.name])
  }

  functionlist()
  {
        this.router.navigate(['teamlist']);
  }

}
