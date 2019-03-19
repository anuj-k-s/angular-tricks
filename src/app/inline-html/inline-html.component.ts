import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-html',
  template: `
  <h1>This is a example of Inline Template !! Enjoy </h1>

  <h2>{{cars.Dodge}}</h2>

  <div *ngFor = "let student of students">
    {{student}}
  </div>


  <ul>
  <li *ngFor = "let student of students ; let i = index">
    {{i}}.{{student}}
  </li>
  </ul>

  <div *ngFor = "let student of students ; let lastItem = last">
     <strong *ngIf = "lastItem">I am first student {{student}}</strong>
  </div>
  <br>

  <div *ngFor = "let student of students ; let firstItem = first">
     <strong *ngIf = "firstItem">I am last student {{student}}</strong>
  </div>
  <br>

  <div *ngFor = "let student of students ; let oddItem = odd">
     <strong *ngIf = "oddItem">I am student {{student}} with odd index</strong>
  </div>
  <br>
  
  <div *ngFor = "let student of students ; let evenItem = even">
     <strong *ngIf = "evenItem">I am student {{student}} with even index</strong>
  </div>
  <br>

  `,
  styles: [`

  h1 {color : red;}

  `]
})
export class InlineHtmlComponent implements OnInit {

  cars = { AlfaRomeo: 'Stelvio', AstonMartin : 'DB9' , Buggati : 'Veron' , Dodge : 'Viper'};
  students = ['anuj', 'ankit', 'ram', 'lakshman'];
  constructor() { }

  ngOnInit() {
  }
 
}
