import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-artist',
  templateUrl: './edit-artist.component.html',
  styleUrls: ['./edit-artist.component.css']
})
export class EditArtistComponent implements OnInit {
  artistToEdit: any = {
    name: '',
    born: '',
    still_alive: '',
  };
  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.artistService.allArtists.subscribe(allArtists => {
      const foundArtist = allArtists.find(artist => artist.id === id);
      if (foundArtist) {
        this.artistToEdit = { ...foundArtist };
        delete this.artistToEdit.added_by;
      }
    });
  }

  updateArtist(): void {
    this.artistToEdit.born = +this.artistToEdit.born;
    this.artistService.updateArtist(this.artistToEdit);
    this.router.navigate(['/artists']);
  }

}
