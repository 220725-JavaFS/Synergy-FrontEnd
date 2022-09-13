import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rating } from '../../models/rating.model';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  url:string = 'http://localhost:8081/gamerswiki/ratings';
  constructor(private http:  HttpClient) { }

  getRating(gameId: number, usersId: number):Observable<any>{
    return this.http.get<any>(this.url+'/'+gameId+'/'+usersId);
  }

  createRating(rating:Rating): Observable<any>{
    let body: Rating = rating;
    return this.http.post<any>(this.url, body);
  }
}
