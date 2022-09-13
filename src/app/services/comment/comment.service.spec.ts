import { TestBed } from '@angular/core/testing';

import { CommentService } from './comment.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Comment } from 'src/app/models/comment.model';


describe('CommentService', () => {
  let service: CommentService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [HttpClientTestingModule],
      providers: [CommentService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getCommentsByGameId should return expected data', (done) => {
    const expectedData: Comment[] =[
      { 'id': 0 , 'userId': 0 , 'gameId': 0, 'context': ''}
    ];
    
    service.getCommentsByGameId(0).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('http://localhost:8081/gamerswiki/comments'+'/'+0);
 
    testRequest.flush(expectedData);
  });

  it('#createComment should return expected data', (done) => {
    const expectedData: Comment[] =[
      { 'id': 0 , 'userId': 0 , 'gameId': 0, 'context': ''}
    ];
    
    service.createComment(new Comment(0,0,0,'')).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('http://localhost:8081/gamerswiki/comments');
 
    testRequest.flush(expectedData);
  });

  it('#updateComment should return expected data', (done) => {
    const expectedData: any = new Comment(0,0,0,'');
    
    service.updateComment(new Comment(0,0,0,'')).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('http://localhost:8081/gamerswiki/comments');
 
    testRequest.flush(expectedData);
  });
});
