import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Comment } from '../models/comment.model';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

constructor(private http:  HttpClient) { }

getCommentsByGameId(gameId: number): Observable<Comment[]>{

  return this.http.get<Comment[]>('http://localhost:8081/data/comments/{gameId}');

  }
  
  createComment(comment:Comment): Observable<Comment>{
    let body: Comment = comment;
    return this.http.post<Comment>('http://localhost:8081/data/comments/{gameId}', body);
  }

  updateComment(comment:Comment): Observable<Comment>{
    let body: Comment = comment;
    return this.http.put<Comment>('http://localhost:8081/data/comments/{gameId}', body);
  }
}
