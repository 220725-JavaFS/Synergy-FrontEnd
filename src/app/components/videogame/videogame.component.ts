import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cover } from 'src/app/models/cover';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game/game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.css']
})

export class VideogameComponent implements OnInit {
  sort: string | undefined;
  games: Array<Game> | undefined;
  name: string = "";
  gameId: number = 0;
  game: Game =  new Game(0, '', '', '');
  cover: Cover = new Cover(0, '');
  private routeSub: Subscription;

  constructor(
    private gameService:GameService,
    private route: ActivatedRoute) {this.routeSub = Subscription.EMPTY; }

  ngOnInit(): void {
    
    //this gets name
    this.routeSub = this.route.params.subscribe((params: Params) => {
      this.name = params['game-search'];
    })
    console.log(this.name);
    
    //this gets game
    this.getGameByName(this.name);

    console.log(this.game);
    //this gets id of game
    //this.getCover();

  }

  getGameByName(name:string) {
    this.gameService.getGameByName(name).subscribe(
      (response: Game) => {
        this.game = response;
      }
    ) 
  }

  getCover() {
    this.gameService.getGameCover(this.gameId).subscribe(
      (response: Cover) => {
          console.log(response);
          this.cover = response;
      }
    )
  }
  
  

}
