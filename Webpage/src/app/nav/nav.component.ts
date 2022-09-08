import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  header = {
    heading: 'Good Games Are Always a Good Investment',
    headingText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique, officia nobis cupiditate consectetur error natus in odit culpa.',
    buttonTextOne: 'Register',
    buttonTextTwo: 'Login',
    buttonTextOneLink: '#newsletter'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
