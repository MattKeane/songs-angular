import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = new Subject();

  private baseUrl = 'http://localhost:8000/api/v1/auth';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    ) { }

  register(credentials): void {
    this.http.post(this.baseUrl + '/register', credentials, this.httpOptions)
      .subscribe((response: any) => {
        if (response.status === 201) {
          this.currentUser.next(response.data);
          this.router.navigate(['/']);
        }
      });
  }

  getCurrentUser(): any {
    return new Observable(subscriber =>
      this.http.get(this.baseUrl + '/current_user', this.httpOptions)
        .subscribe((response: any) => {
          console.log('service works');
          if (response.status === 200) {
            this.currentUser.next(response.data);
          }
          subscriber.next(response);
          subscriber.complete();
        }, err => subscriber.error(err))
    );
  }

  logOut(): void {
    this.http.get(this.baseUrl + '/logout', this.httpOptions)
      .subscribe((response: any) => {
        this.currentUser.next(null);
        this.router.navigate(['/login']);
      });
  }

  logIn(credentials): void {
    this.http.post(this.baseUrl + '/login', credentials, this.httpOptions)
      .subscribe((response: any) => {
        if (response.status === 200) {
          this.currentUser.next(response.data);
          this.router.navigate(['/']);
        }
      });
  }
}
