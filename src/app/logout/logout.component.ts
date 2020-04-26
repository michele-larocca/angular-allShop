import { Component, OnInit } from '@angular/core';
import { AuthAppServiceService } from '../servicies/auth-app-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authentication: AuthAppServiceService) { }

  ngOnInit(): void {
    this.authentication.clearAll();
  }

}
