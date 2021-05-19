import { Component, OnInit, } from '@angular/core';
import { ArtistService } from '../artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-artist',
  templateUrl: './new-artist.component.html',
  styleUrls: ['./new-artist.component.css']
})
export class NewArtistComponent implements OnInit {
  newArtist: any = {
    name: '',
    born: '',
    still_alive: true,
  };

  constructor(
    private artistService: ArtistService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  createNewArtist(): void {
    this.newArtist.born = +this.newArtist.born;
    this.artistService.createArtist(this.newArtist);
    this.router.navigate(['/artists'])
  }

}
