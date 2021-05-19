import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {
  currentUser: any;

  allArtists: any[] = [];

  constructor(
    private artistService: ArtistService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(currentUser => this.currentUser = currentUser);
    this.artistService.allArtists.subscribe(allArtists => this.allArtists = allArtists);
    this.artistService.getAllArtists();
  }

}
