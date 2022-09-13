import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { LoginService } from 'src/app/services/login/login.service';
import { Location } from '@angular/common';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new Users();
  errorFeedback='';

  constructor(private location: Location, private ls: LoginService, private router: Router, public session: SessionService) { }

  ngOnInit(): void {
    scrollTo(0,675);
  }

  loginUser(){
    this.ls.returningUser(this.user).subscribe(
      data =>{ 
        this.user = data;
        console.log("Success");
        this.location.back();
        this.ls.setActive(this.user);
      },
      error =>{ 
        console.log("Error");
        this.errorFeedback = "Error: The username or password is incorrect";
      }
    );

  }

}
