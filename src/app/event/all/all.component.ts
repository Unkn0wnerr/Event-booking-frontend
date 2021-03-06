import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  events:any=[];
  src:boolean=false;
  src2:boolean=false;
  abc:any;
  constructor(public rest:RestService, private route:ActivatedRoute, private router:Router) { }



  ngOnInit() {
    this.rest.getEventbyGame(this.route.snapshot.params['gamename']).subscribe((data: {}) => {
      console.log(data);
      this.events=data;
      
    })
    this.getGameName();
    
  }

  onSelect(event:any){

    var eventdata;
    eventdata=this.events.map(
      (data)=>data.name
    )
    localStorage.setItem('event', JSON.stringify(event));

    this.router.navigate(['/event/eventpage', event.eventId]);
}


  getGameName():void{
    if(this.events.gameName=="CSGO")
    {
      this.src=!this.src;
    }
    
    if(this.events.gameName=="DOTA")
    {
      this.src2=!this.src2;
    }
  
    
  
  }

  
  
}
