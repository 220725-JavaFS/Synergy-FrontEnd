/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VideogameComponent } from './videogame.component';

describe('VideogameComponent', () => {
  let component: VideogameComponent;
  let fixture: ComponentFixture<VideogameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideogameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
