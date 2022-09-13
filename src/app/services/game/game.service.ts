import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cover } from 'src/app/models/cover';
import { Game } from 'src/app/models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

constructor(private http:  HttpClient) { }

url:string = 'http://localhost:8081/gamerswiki/games';

getGameById(gameId:number): Observable<Game>{
  let body: String = "fields *; where id = "+gameId+";";
  return this.http.post<Game>(this.url+'/'+gameId, body);
}

getGameCover(gameId:number): Observable<Cover>{
  let body: String = "fields *; where game = "+gameId+";";
  return this.http.post<Cover>(this.url+'/cover', body);

}


}
