import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = new Subject();

  private baseUrl = 'http://localhost:8000/api/v1/auth';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      credentials: 'include',
    })
  };

  constructor(private http: HttpClient ) { }

  register(credentials): void {
    this.http.post(this.baseUrl + '/register', credentials, this.httpOptions)
      .subscribe((response: any) => {
        if (response.status === 201) {
          this.currentUser.next(response.data);
        }
      });
  }
}
