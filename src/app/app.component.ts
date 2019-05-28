import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tips';
  public flag = false;
  constructor() {
    setTimeout(() => {
      this.flag = true;
    }, 2000);
  }
}
