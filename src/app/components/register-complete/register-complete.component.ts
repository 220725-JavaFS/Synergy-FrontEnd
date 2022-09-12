import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-complete',
  templateUrl: './register-complete.component.html',
  styleUrls: ['./register-complete.component.css']
})
export class RegisterCompleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    scrollTo(0, 700);
  }

}
