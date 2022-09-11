import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

  const headers2 = new HttpHeaders()
  .set("Client-ID", 'b2wju3h59suvrb5pe7f2ipwq6e0xgan')
      .set("Authorization", 'Bearer pb60tb9jgd5albai0snyl43gumu0zp');


@Injectable({
  providedIn: 'root'
})
export class GameService {


  constructor(private httpClient:  HttpClient) {
   }

  getGameById(id:number):Observable<any>{
    let body: String = "fields *; where id = 5;"
    console.log(this.httpClient.post('https://api.igdb.com/v4/games', {headers:{accept:"application/json","Client-ID": "b2wju3h59suvrb5pe7f2ipwq6e0xgan", Authorization: "Bearer pb60tb9jgd5albai0snyl43gumu0zp"}} ));
    return this.httpClient.post<any>('https://api.igdb.com/v4/games', {headers:{accept:"application/json","Client-ID": "b2wju3h59suvrb5pe7f2ipwq6e0xgan", Authorization: "Bearer pb60tb9jgd5albai0snyl43gumu0zp"}} );
  }
}
