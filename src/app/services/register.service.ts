import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:  HttpClient) { }

  url= 'http://localhost:8081/data/users';

  addUser(u:Users):Observable<Users[]>{
    return this.http.post(this.url,u) as Observable<Users[]>;
  }

  getAllUsers():Observable<Users[]> {
    return this.http.get<Users[]>(this.url);
  }
}
