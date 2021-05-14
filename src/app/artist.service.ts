import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  allArtists: BehaviorSubject<any> = new BehaviorSubject([]);

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    withCredentials: true,
  };

  private baseUrl = 'http://localhost:8000/api/v1/artists';

  constructor(private http: HttpClient) { }

  getAllArtists(): void {
    this.http.get(this.baseUrl + '/', this.httpOptions)
      .subscribe((res: any) => {
        if (res.status === 200) {
          this.allArtists.next(res.data);
        }
      });
  }
}
