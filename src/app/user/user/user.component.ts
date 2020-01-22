import { Component, OnInit } from '@angular/core';
import { user } from '../user';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

 
@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
dataShow:boolean=true;
all:boolean=true;
userdetails:user=new user();//form data

g:any=[];//database data
  constructor(private usv:UserService) { }

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



}
