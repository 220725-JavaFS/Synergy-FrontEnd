import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { LoginService } from 'src/app/services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new Users();
  errorFeedback='';

  constructor(private ls: LoginService, private router: Router) { }

  ngOnInit(): void {
    scrollTo(0,675);
  }

  loginUser(){
    this.ls.returningUser(this.user).subscribe(
      data =>{ 
        console.log("Success");
        this.router.navigate(['/register-complete']);
      },
      error =>{ 
        console.log("Error");
        this.errorFeedback = "Error: The username or password is incorrect";
      }
    );

  }

}
