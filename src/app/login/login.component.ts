import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const USER_OK = 'michele';
const PASS_OK = '123';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId = "";
  password = "";

  authenticated = false;
  message = "";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  loginAut() {
    console.log(`Executing Login, User: ${this.userId} Password: ${this.password}`);

    if(!this.userId || !this.password) {
      this.message = "Insert User name and password to enter !";
    }
    else if(this.userId === USER_OK && this.password === PASS_OK) {
      this.route.navigate(['welcome', this.userId]);
    } 
    else {
      this.authenticated = false;
      this.message = "User name or password wrong !!!";
    }
  }
}
