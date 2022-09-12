import { Comment } from './comment.model';

describe('Comment', () => {
  it('should create an instance', () => {
    expect(new Comment(0,0,1,'test')).toBeTruthy();
  });
});
