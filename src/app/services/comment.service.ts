import { Injectable } from '@angular/core';

import { Comment } from '../models/comment.model';
@Injectable({
  providedIn: 'root'
})
export class CommentService {


  comment1 = new Comment(1, 1, 1, "1 1");
  comment2 = new Comment(2, 1, 2, "1 2");
  comment3 = new Comment(3, 2, 1, "2 1");
  comment4 = new Comment(4, 2, 2, "2 2");
  comment5 = new Comment(5, 3, 3, "3 3");

  comments:Comment[] = [this.comment1,this.comment2,this.comment3,this.comment4,this.comment5];
constructor() { }

getComments():Comment[]{
  return this.comments;
} 

getCommentsByGameId(gameId: number): Comment[] {
    return this.comments.filter(comment => comment.gameId == gameId);
  }
}
