import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Comment } from '../../models/comment.model';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

url:string = 'http://localhost:8081/gamerswiki/comments';

constructor(private http:  HttpClient) { }

getCommentsByGameId(gameId: number): Observable<Comment[]>{

  return this.http.get<Comment[]>(this.url+'/'+gameId);

  }
  
  createComment(comment:Comment): Observable<Comment[]>{
    console.log(comment);
    let body: Comment = comment;
    console.log(body);
    return this.http.post<Comment[]>(this.url, body);
  }

  updateComment(comment:Comment): Observable<any>{
    let body: Comment = comment;
    return this.http.put<any>(this.url, body);
  }
}
