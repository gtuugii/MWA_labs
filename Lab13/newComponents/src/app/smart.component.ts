import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <b>
      smart works!
    </b>

    <ul>
      <li *ngFor="let dumbR of dumbArray">
        <app-dumb [row]="dumbR"></app-dumb>
      </li>
    </ul>

  `,
  styles: [`b {color: blue}`]
})
export class SmartComponent implements OnInit {

  constructor() { }

  dumbArray = [
    { key: 'CS472', course: 'WAP'},
    { key: 'CS572', course: 'MWA'},
    { key: 'CS545', course: 'WAA'}
  ];

  ngOnInit() {
    //
  }

}
