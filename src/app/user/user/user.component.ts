import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

 
@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
dataShow:boolean=false;
all:boolean=false;
status:boolean=false;
userdetails:User=new User();//form data

g:any=[];//database data
a:any=[];
  constructor(private usv:UserService, private route:ActivatedRoute) { }

ngOnInit():void {
     
  }

getdetailsUser():void{
 
  this.usv.getUserById(this.userdetails.userId).subscribe(data =>{
    this.g.push(data);
    console.log(this.g)
    this.dataShow=!this.dataShow;
        });
       
        
  }

  getAllList():void{
    this.usv.getAllUser().subscribe((data:{})=>{
      this.g=data;
      console.log(this.g)
      this.dataShow=!this.dataShow;
      
    });
  }

  o:any;
  orgShow:boolean=false;
    getAllOrgList():void{
      this.usv.getAllOrganization().subscribe((data:{})=>{
        this.o=data;
        console.log(this.o);
        this.orgShow=!this.orgShow;
      });
    }
/*
  userstr:string;
  deleteUser(user:any){
    this.usv.deleteUserById(this.route.snapshot.params['id']).subscribe((datastr)=>{
      console.log(datastr);
      this.userstr=datastr;
    })
  }
*/
  //onSelect(event:any){
  //  this.router.navigate(['/event/eventpage', event.eventId])
//}



/*
  this.rest.getEventDetails(this.route.snapshot.params['id']).subscribe((data: {}) => {
    console.log(data);
    this.events=data;
})*/




}
