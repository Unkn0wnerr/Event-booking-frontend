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
dataShow:boolean=true;
all:boolean=true;
userdetails:User=new User();//form data

g:any=[];//database data
  constructor(private usv:UserService, private route:ActivatedRoute) { }

 // aa:any=1;
  ngOnInit():void {
  
   
  }
status:boolean=false;
 

getdetailsUser():void{
 
  this.usv.getUserById(this.userdetails.userId).subscribe(data =>{
    this.g.push(data);
    console.log(this.g)
        });
        
        this.status=!this.dataShow;
        this.dataShow=!this.dataShow;
  }

  getAllList():void{
    this.usv.getAllUser().subscribe((data:{})=>{
      this.g=data;
      console.log(this.g)
      this.dataShow=!this.dataShow;
      this.status=!this.status;
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




  o:any;
orgShow:boolean=false;
  getAllOrgList():void{
    this.usv.getAllOrganization().subscribe((data:{})=>{
      this.o=data;
      //sessionStorage.setItem('orgEmail',this.g.orgEmail);
      console.log(this.o)
      this.dataShow=!this.dataShow;
     // this.status=!this.status;
      this.orgShow=!this.orgShow;
    });
  }


}
