import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotiService } from '../../services/spoti.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any = {
    external_urls: ''
  };
  topTracks: any[] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute, private _service: SpotiService) 
  { 
    this.loading = true;
    this.router.params.subscribe( params => {
      this.getArtist(params.id);
      this.getTopTrack(params.id);
      this.loading = false;
    });
  }

  ngOnInit() 
  {

  }

  getArtist(idArtist)
  {
    this.loading = true;
    this._service.getArtist(idArtist).subscribe(data => {
      this.artist = data;
      this.loading = false;
    });
  }

  getTopTrack(idArtist)
  {
    this.loading = true;
    this._service.getTopTracks(idArtist).subscribe(data => {
      this.topTracks = data;
      console.log(this.topTracks);
      this.loading = false;
    })
  }

}
