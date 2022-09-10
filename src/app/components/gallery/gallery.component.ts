import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  brews: any = []; 

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getBeer().subscribe((data) => {
      this.brews = data;
      console.log(this.brews);
    });
  }

}
