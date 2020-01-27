import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.css']
})
export class TeamlistComponent implements OnInit {

  constructor(private usv:UserService) { }

  ngOnInit() {
  }
dataShow:boolean=false;
  g:any=[];
  getAllList():void{
    this.usv.getAllTeam().subscribe((data:{})=>{
      this.g=data;
     this.dataShow=!this.dataShow;
      console.log(this.g)
      
    });
  }

}
