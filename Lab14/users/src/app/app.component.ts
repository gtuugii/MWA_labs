import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <app-getdata></app-getdata>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'users';
}
