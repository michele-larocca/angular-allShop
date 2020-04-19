import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  userId = '';

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
  }


}
