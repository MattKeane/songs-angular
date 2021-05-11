import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'songs';
  currentUser: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser
      .subscribe(user => this.currentUser = user);
    this.authService.getCurrentUser();
  }

}
