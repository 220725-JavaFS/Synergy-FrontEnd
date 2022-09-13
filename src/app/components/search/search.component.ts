import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  game: string = '';
  
  searchTerm: string = '';

  //The router name could change
  constructor(private router: Router) {}

  ngOnInit() {
  }
  

  
}
