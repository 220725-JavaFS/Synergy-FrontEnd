import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  gameId: number = 0;
  game: Game =  new Game(0, '', '', '');

  constructor(private gameService:GameService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gameId = parseInt(this.route.snapshot.paramMap.get('game_id')!);
    this.getGame();
  }

  getGame(){
    this.gameService.getGameById(this.gameId).subscribe(
      (response: Game) => {
          this.game = response;
      }
    )
  }

}
