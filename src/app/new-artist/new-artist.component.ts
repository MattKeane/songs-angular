import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-artist',
  templateUrl: './new-artist.component.html',
  styleUrls: ['./new-artist.component.css']
})
export class NewArtistComponent implements OnInit {

  @Output() closeModalEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }

}
