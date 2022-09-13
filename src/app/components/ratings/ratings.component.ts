import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rating } from 'src/app/models/rating.model';
import { Users } from 'src/app/models/users';
import { RatingService } from 'src/app/services/ratings/rating.service';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  gameId: number = 0;
  user:Users = new Users();
  rating: Rating = new Rating(0,this.user,0,0);
  constructor(private router: Router, private ratingService:RatingService, private route: ActivatedRoute, public session: SessionService) { }

  ngOnInit(): void {
    this.gameId = parseInt(this.route.snapshot.paramMap.get('game_id')!);
    
    this.session.getActiveUser().subscribe(
      (response: Users) => {
        console.log(response)
        this.user = response;
        this.getUserRating();
      }); 
      
      
  }

  getUserRating() {
    this.ratingService.getRating(this.gameId, this.user.id).subscribe(
      (response: Rating) => {
        if(response){
          console.log(response);
          this.rating = response;
        }
      }
    )
  }

  setUserRating(){
    this.rating.users = this.user;
    this.rating.gameId = this.gameId;
    this.ratingService.createRating(this.rating).subscribe(
      (response: Rating) => {
        this.rating = response;
      }
    )
  }

   ratingChange(event: any){
    if(this.canActivate()){
      this.setUserRating();
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
