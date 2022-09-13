import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment/comment.service';
import { Comment } from '../../models/comment.model';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Users } from 'src/app/models/users';
import { SessionService } from 'src/app/services/session/session.service';

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
  user: Users = new Users();

  constructor(private router: Router, private commentService:CommentService, private route: ActivatedRoute, public session: SessionService) { }

  ngOnInit(): void {
      this.gameId = parseInt(this.route.snapshot.paramMap.get('game_id')!);
      this.getComments();
      this.session.getActiveUser().subscribe(
        (response: Users) => {
          console.log(response)
          this.user = response;
        });
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
    let comment = new Comment(0, this.user, this.gameId, this.context);
    this.context = '';
    this.commentService.createComment(comment).subscribe(
      (response: Comment[]) => {
        this.comments = response;
      }
    )
  }

  switchNewCommentVisibility():void {
    if(this.canActivate()){
      this.newCommentVisibility = !this.newCommentVisibility;  
    }
    

  }

  canActivate() {
      
    if (this.user) {
        // logged in so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);
    return false;
}
}
