import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArtistService } from '../artist.service';

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

  @Output() closeModalEvent = new EventEmitter();

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  createNewArtist(): void {
    this.newArtist.born = +this.newArtist.born;
    this.artistService.createArtist(this.newArtist);
    this.closeModalEvent.emit();
  }

}
