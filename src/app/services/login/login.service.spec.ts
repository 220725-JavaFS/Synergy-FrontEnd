import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginService } from './login.service';
import { Users } from 'src/app/models/users';

describe('LoginService', () => {
  let service: LoginService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#returningUser should return expected data', (done) => {
    const expectedData: any= new Users();
    
    service.returningUser(new Users()).subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });

    const testRequest = httpTestingController.expectOne('http://localhost:8081/gamerswiki/login/');
 
    testRequest.flush(expectedData);
  });
});
