import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http:  HttpClient) {  }
  url:string = 'http://localhost:8081/gamerswiki/ses';

  getActiveUser(){
    return this.http.get<any>(this.url);
  }

  setActiveUser(user:Users){
    let body = user;
    return this.http.post<any>(this.url, body);
  }
}
