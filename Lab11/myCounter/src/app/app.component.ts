import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `<app-counter></app-counter>`,
  // template : `
  //   Parent Text Box :- <input type="text" #PT (keyup)="SendDataToChild()" />
  //   <counter></counter>`,
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myCounter';

  SendDataToChild(){

  }

}
