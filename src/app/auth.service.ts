import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8000/api/v1/auth';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      credentials: 'include',
    })
  };

  constructor(private http: HttpClient ) { }

  register(credentials): Observable<any> {
    return this.http.post(this.baseUrl + '/register/', credentials, this.httpOptions);
  }
}
