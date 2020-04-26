import { Component, OnInit } from '@angular/core';
import { AuthAppServiceService } from '../servicies/auth-app-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authentication: AuthAppServiceService) { }

  ngOnInit(): void {
  }
  
  showLogout(){
    return this.authentication.isLogged();
  }

  whoIsLogged(){
    return this.authentication.getLoggedUser();
  }
}
