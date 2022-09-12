import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:  HttpClient) { }

  url= 'http://localhost:8081/gamerswiki/register';

  newUser(user:Users):Observable<any>{
    return this.http.post<any>(this.url, user);
  }
}
