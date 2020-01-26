import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService{

    constructor(private router: Router){}
    loginInfo(username, password){
        if(username === "admin" && password == "admin"){
            sessionStorage.setItem('admin',username);   
            this.router.navigate(['user']);
        }
    }
}