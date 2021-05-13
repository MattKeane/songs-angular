import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'songs';
  currentUser: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.authService.currentUser
      .subscribe(user => this.currentUser = user);
    this.authService.getCurrentUser()
      .subscribe(response => {
        if (response.status !== 200) {
          this.router.navigate(['login']);
        }
      }, err => this.router.navigate(['login']));
  }

  logOut(): void {
    this.authService.logOut();
  }

}
