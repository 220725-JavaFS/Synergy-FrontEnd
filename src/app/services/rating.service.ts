import { Injectable } from '@angular/core';
import { Rating } from '../models/rating.model';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
    rating1 = new Rating(1, 1, 1, 6);
    rating2 = new Rating(2, 1, 2, 7);
    rating3 = new Rating(3, 2, 1, 8);
    rating4 = new Rating(4, 2, 2, 9);
    rating5 = new Rating(5, 3, 3, 10);
  
    ratings:Rating[] = [this.rating1,this.rating2,this.rating3,this.rating4,this.rating5];
  constructor() { }

  getRatings():Rating[]{
    return this.ratings;
  }
}
