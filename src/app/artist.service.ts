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

  createArtist(newArtist): void {
    this.http.post(this.baseUrl + '/', newArtist, this.httpOptions)
      .subscribe((res: any) => {
        if (res.status === 201) {
          const allArtists = this.allArtists.getValue();
          allArtists.push(res.data);
          this.allArtists.next(allArtists);
        }
      });
  }
}
