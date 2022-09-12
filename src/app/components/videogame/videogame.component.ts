import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Game } from 'src/app/models/game';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.css']
})
export class VideogameComponent implements OnInit {
  public sort: string | undefined;

  public games: Array<Game> | undefined;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   if (params['game-search']) {
    //     this.searchs('IGDB', params['game-search']);
    //   }
    // })
  }

}
