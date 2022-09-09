import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  header = {
    heading: 'Welcome to the Video Game Library!',
    headingText: 'Feel free to search for video games, add them to your list of favorites, rate them, and leave comments',
    buttonTextOne: 'Register',
    buttonTextTwo: 'Login',
    buttonTextOneLink: '#newsletter'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
