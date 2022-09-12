import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  header = {
    heading: 'Welcome to the Video Game Library!',
    headingText: 'Feel free to search for video games, add them to your list of favorites, rate them, and leave comments',
    buttonTextOne: 'Register',
    buttonTextTwo: 'Login',
    buttonTextOneLink: '/register',
    buttonTextTwoLink: '/login'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

