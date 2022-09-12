import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment/comment.service';
import { Comment } from '../../models/comment.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments:Comment[] = [];
  newCommentVisibility = false;
  gameId: number = 0;
  context: string = '';

  constructor(private commentService:CommentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.gameId = parseInt(this.route.snapshot.paramMap.get('game_id')!);
      this.getComments();
  }

  getComments() {
    this.commentService.getCommentsByGameId(this.gameId).subscribe(
      (response: Comment[]) => {
        this.comments = response;
      }
    )
  }

  createComment(){
    this.switchNewCommentVisibility();
    let comment = new Comment(0, 0, this.gameId, this.context);
    this.context = '';
    this.commentService.createComment(comment).subscribe(
      (response: Comment[]) => {
        this.comments = response;
      }
    )
  }

  switchNewCommentVisibility():void {
    this.newCommentVisibility = !this.newCommentVisibility;  
  }
}
