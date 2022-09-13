import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Users } from 'src/app/models/users';
import { LoginService } from '../login/login.service';

import { RegisterService } from './register.service';

describe('RegisterService', () => {
  let service: RegisterService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#newUser should return expected data', (done) => {
    const expectedData: any= new Users();
    
    service.newUser(new Users()).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('http://localhost:8081/gamerswiki/register');
 
    testRequest.flush(expectedData);
  });
});
