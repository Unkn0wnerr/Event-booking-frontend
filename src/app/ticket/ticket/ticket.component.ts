import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {


  user:any;
  event:any;

  constructor( private router:Router) { }

  ngOnInit() {

    this.user=sessionStorage.getItem(JSON.parse('user'));
    this.event=localStorage.getItem(JSON.parse('event'));
    console.log(this.user);
    console.log(this.event);
  }



 


  onSelect(){
    this.user=sessionStorage.getItem(JSON.parse('user'));
    this.event=localStorage.getItem(JSON.parse('event'));

    this.router.navigate(['/book']);
}

}
