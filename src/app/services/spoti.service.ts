import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotiService {
  
  url: string = 'https://api.spotify.com/v1/'; 
  accessToken: string = 'BQB5bCxWDYeLY0QvGKRRYtnWQ8mIP3VM_80WddB-GjEe1IL3Gkq2A9Vdlp8lrs8FTCuGx07IyZX5TwiQUXI';


  headers: HttpHeaders = new HttpHeaders({
    "Authorization": "Bearer " + this.accessToken
  });


  constructor(private http: HttpClient) 
  { 

  }

  getNewReleases()
  {
    let headers = this.headers;
    return this.http.get(this.url + 'browse/new-releases', {headers}).pipe(map( (data: any) => {
      return data.albums.items
    }));
  }

  getArtists(word: string)
  {
    let headers = this.headers;
    return this.http.get(this.url + `search?q=${ word }&type=artist&limit=20`, {headers}).pipe(map( (data:any) => {
      return data.artists.items
    }));
  }

  getArtist(id: string)
  {
    let headers = this.headers;
    return this.http.get(this.url + `artists/${id}`, {headers});
  }

  getTopTracks(id: string)
  {
    let headers = this.headers;
    return this.http.get(this.url + `artists/${id}/top-tracks?country=US`, {headers})
      .pipe(map(data => data['tracks']));
  }

}
