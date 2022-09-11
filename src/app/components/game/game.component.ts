import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  game: Game = {
    id: 0,
    category: 0,
    name: "",
    summary: ""
  };

  constructor(private gs: GameService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let gameId = parseInt(this.route.snapshot.paramMap.get('game_id')!);
    this.gs.getGameById(gameId).subscribe((response: Game) => {
      this.game = response;
    })
  }

}
