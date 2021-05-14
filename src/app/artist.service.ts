import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import BehaviorSubject from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  allArtists: BehaviorSubject = new BehaviorSubject([]);

  private baseUrl = 'http://localhost:8000/api/v1/artists';

  constructor(private http: HttpClient) { }
}
