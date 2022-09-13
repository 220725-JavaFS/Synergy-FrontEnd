import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new Users();
  errorFeedback='';
  
  constructor(private rs: RegisterService, private router: Router) { }

  ngOnInit(): void {
    scrollTo(0,800);
  }
  changetype:boolean =true;

  viewpass(){
    this.changetype = !this.changetype;
  }

  registerUser(){
    this.rs.newUser(this.user).subscribe(
      data =>{ 
        console.log("Success");
        this.router.navigate(['/register-complete']);
      },
      error =>{ 
        console.log("Error");
        scrollTo(0,900);
        this.errorFeedback = "Error: Something went wrong. Please ensure all required fields have entries.";
      }
    );
  }

}
