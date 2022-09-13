import { ComponentFixture, TestBed } from '@angular/core/testing';
import { defer } from 'rxjs';

import { CommentsComponent } from './comments.component';
import { Comment } from '../../models/comment.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommentService } from 'src/app/services/comment/comment.service';
describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  let serviceSpy: jasmine.SpyObj<CommentService>;

    /**
   * This is a helper function that returns an Observable.
   */
     function asyncData<T>(data: T){
      //The "defer" function allows you to create an
      //Observable when the observer subscribes. It's useful
      //for mocking.
      return defer(() => Promise.resolve(data));
    }

  beforeEach(async () => {

    serviceSpy = jasmine.createSpyObj('CommentService',
    ['createComment','getCommentsByGameId' ]);

    serviceSpy.getCommentsByGameId.and.returnValue(asyncData([new
      Comment(1, 1, 1, 'test'), new Comment(2, 1, 1, 'test2')]));

    await TestBed.configureTestingModule({
      declarations: [ CommentsComponent ],
      imports: [HttpClientTestingModule],
         /**
       * This allows us to instruct the framework to use our spy
       * rather than our actual service.
       */
      providers: [{provide: CommentService, useValue: serviceSpy}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should change the value of the 
  'visibility variable when switchVisibile is called`,
  () => {
    expect(component.newCommentVisibility).toBeFalse();
    component.switchNewCommentVisibility();
    expect(component.newCommentVisibility).toBeTrue();
  });

});
