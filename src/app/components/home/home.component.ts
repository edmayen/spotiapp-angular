import { Component, OnInit } from '@angular/core';
import { SpotiService } from '../../services/spoti.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading: boolean;
  isError: boolean = false;
  errorMessage;

  constructor(private _service: SpotiService) 
  { 
    this.loading = true;
    _service.getNewReleases().subscribe((data:any) => {
      this.newReleases = data;
      this.loading = false;
    }, error =>{
      this.isError = true;
      this.errorMessage = error.error.error.message;
      this.loading = false;
    })
  }

  ngOnInit() 
  {

  }

  

}
