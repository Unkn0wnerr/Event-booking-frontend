import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

signup:boolean=true;

  constructor() { }

  ngOnInit() {
  }

  showData()
  {

    this.signup=!this.signup;
  }


}
