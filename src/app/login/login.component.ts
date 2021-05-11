import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: any = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.authService.logIn(this.credentials);
  }

}
