import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';


@Component({
  selector: 'organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  constructor(private usv:UserService) { }

  ngOnInit() {
  }
dataShow:boolean;
status:boolean;
  g:any;

  getAllList():void{
    this.usv.getAllOrganization().subscribe((data:{})=>{
      this.g=data;
      console.log(this.g)
      this.dataShow=!this.dataShow;
      this.status=!this.status;
    });
  }


}
