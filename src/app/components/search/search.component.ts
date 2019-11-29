import { Component, OnInit } from '@angular/core';
import { SpotiService } from '../../services/spoti.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artist: any[] = [];
  loading: boolean;

  constructor(private _service: SpotiService) 
  { 
    
  }

  ngOnInit() {
  }

  search(word: string)
    {
      this.loading = true;
      this._service.getArtists(word).subscribe((data: any) => {
        this.artist = data;
        this.loading = false;
      })
    } 
  

}
