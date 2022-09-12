import { Rating } from './rating.model';

describe('Rating', () => {
  it('should create an instance', () => {
    expect(new Rating(0,0,1,5)).toBeTruthy();
  });
});
