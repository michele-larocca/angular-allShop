import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WelcomeAppServiceService } from '../servicies/data/welcome-app-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userId = '';
  message = '';

  constructor(private route : ActivatedRoute, private welcomeSvr: WelcomeAppServiceService) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.welcomeSvr.getGreating().subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    );
  }

  handleResponse(response) {
    this.message = response;
  }

  handleError(error) {
    this.message = error.error.message;
  }
}
