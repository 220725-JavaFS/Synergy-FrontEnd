import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userFN:string ='';
  userLN:string='';
  userEmail:string= '';
  username:string='';
  userPassword:string='';
  users: Users[]=[];
  
  constructor(private rs: RegisterService) { }

  ngOnInit(): void {
    scrollTo(0,800);
    this.getUsers();
  }

  getUsers(){
    this.rs.getAllUsers().subscribe(
      (response: Users[]) => {
        this.users = response;
      }
    )
  }

  sendUser(){
    let u = new Users(0, this.userFN, this.userLN, this.userEmail, this.username, this.userPassword)
    this.rs.addUser(u).subscribe(
      (response: Users[]) => {
        this.users = response;
      }
    )
  }

}
