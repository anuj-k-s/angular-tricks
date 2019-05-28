import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-basic',
  templateUrl: './template-basic.component.html',
  styleUrls: ['./template-basic.component.scss']
})
export class TemplateBasicComponent implements OnInit {
  students = ['anuj', 'ankit', 'ram', 'lakshman'];
  constructor() { }

  ngOnInit() {
  }

}
