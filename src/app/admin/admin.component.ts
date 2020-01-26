import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService ) { }

  logInForm: FormGroup;

  ngOnInit() {
    this.logInForm = new FormGroup({
        'username': new FormControl(null, [Validators.required]),
        'password': new FormControl(null, [Validators.required])

    });
  }

  onLogin() {
    let username = this.logInForm.value.username;
    let password = this.logInForm.value.password;
    if(username !== "" && password !== ""){
      this.authService.loginInfo(username, password);
    }
  }


}
