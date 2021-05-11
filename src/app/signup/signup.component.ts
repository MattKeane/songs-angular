import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  credentials = {
    username: '',
    password: '',
    email: '',
  };

  verifyPassword = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleClick(): void {
    if (this.credentials.password === this.verifyPassword) {
      this.authService.register(this.credentials);
    }
  }

}
