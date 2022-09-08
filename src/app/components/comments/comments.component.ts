import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../models/comment.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments:Comment[] = [];

  gameId: number = 0;

  constructor(private commentService:CommentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.gameId = parseInt(this.route.snapshot.paramMap.get('gameId')!);
      this.comments=this.commentService.getCommentsByGameId(this.gameId);
  }
}
