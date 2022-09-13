import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cover } from 'src/app/models/cover';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game/game.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.css']
})

export class VideogameComponent implements OnInit {
  sort: string | undefined;
  name: string = "";
  gameId: number = 0;
  games: Game[] =  [];
  cover: Cover = new Cover(0, '');
  private routeSub: Subscription;

  searchTerm: string = '';
  
  constructor(private router: Router,
    private gameService:GameService,
    private route: ActivatedRoute) {this.routeSub = Subscription.EMPTY; }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.searchTerm = form.value.search;
    console.log(this.searchTerm);
    this.getGameByName(this.searchTerm);
    console.log(this.games);
  }

  getGameByName(name:string) {
    this.gameService.getGameByName(name).subscribe(
      (response: Game[]) => {
        this.games = response;
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
