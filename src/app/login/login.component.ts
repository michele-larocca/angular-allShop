import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAppServiceService } from '../servicies/auth-app-service.service';

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

  constructor(private route: Router, private authentication: AuthAppServiceService) { }

  ngOnInit(): void {
  }

  loginAut() {
    console.log(`Executing Login, User: ${this.userId} Password: ${this.password}`);

    if(!this.userId || !this.password) {
      this.message = "Insert User name and password to enter !";
    }
    else if(this.authentication.executeLogin(this.userId, this.password)) {
      this.route.navigate(['welcome', this.userId]);
    } 
    else {
      this.authenticated = false;
      this.message = "User name or password wrong !!!";
    }
  }
}
