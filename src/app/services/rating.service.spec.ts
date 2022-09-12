/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RatingService } from './rating.service';

describe('Service: Rating', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatingService]
    });
  });

  it('should ...', inject([RatingService], (service: RatingService) => {
    expect(service).toBeTruthy();
  }));
});
