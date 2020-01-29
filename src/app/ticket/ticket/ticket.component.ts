import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { Ticket } from 'src/app/ticket';

@Component({
  selector: 'ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  user:any;
  event:any;
  ticket:Ticket=new Ticket();
 

  constructor( private router:Router, private bookticket:RestService) { }

  ngOnInit() {
    this.user=sessionStorage.getItem('user');
    this.event=localStorage.getItem('event');

    this.user=JSON.parse(this.user);
    this.event=JSON.parse(this.event);

    console.log(this.user.userId);
    console.log(this.event.eventId);
    
  }




 


  onSelect(){
    this.ticket.category='Gold';
    this.ticket.seatNo=10;
    this.ticket.ticketPrize=500;
    this.ticket.ticketStatus=true;
    this.ticket.event_Id=this.event.eventId;
    this.ticket.user_Id=this.user.userId;
    
    this.bookticket.bookTicket(this.ticket).subscribe(
      res=> {
        this.router.navigate(['/book']);
      },
      err => console.log(err)
    )

    
}

}


