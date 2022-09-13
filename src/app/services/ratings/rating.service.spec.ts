import { TestBed } from '@angular/core/testing';

import { RatingService } from './rating.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Rating } from 'src/app/models/rating.model';

describe('RatingService', () => {
  let service: RatingService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [HttpClientTestingModule],
      providers: [RatingService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getRating should return expected data', (done) => {
    const expectedData: any = new Rating(0,0,0,0);
    
    service.getRating(0,0).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('http://localhost:8081/gamerswiki/ratings'+'/'+0+'/'+0);
 
    testRequest.flush(expectedData);
  });
  it('#createRating should return expected data', (done) => {
    const expectedData: any = new Rating(0,0,0,0);
    
    service.createRating(new Rating(0,0,0,0)).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('http://localhost:8081/gamerswiki/ratings');
 
    testRequest.flush(expectedData);
  });
});
