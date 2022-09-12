import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rating } from 'src/app/models/rating.model';
import { RatingService } from 'src/app/services/ratings/rating.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  gameId: number = 0;
  rating: Rating = new Rating(0,0,0,0);
  constructor(private ratingService:RatingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gameId = parseInt(this.route.snapshot.paramMap.get('game_id')!);
    this.getUserRating();
  }

  getUserRating() {
    this.ratingService.getRating(this.gameId, 0).subscribe(
      (response: Rating) => {
        this.rating = response;
      }
    )
  }

  setUserRating(){
    this.ratingService.createRating(this.rating).subscribe(
      (response: Rating) => {
        this.rating = response;
      }
    )
  }

   ratingChange(event: any){
    
    this.setUserRating();
    
   }

}
