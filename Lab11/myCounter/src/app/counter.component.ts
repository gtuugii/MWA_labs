import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>This is Angular</h1>
    <button type="button" name="dec" (click)="dec()"> - </button>
    {{ counterValue }}
    <button type="button" name = "inc" (click)="inc()" > + </button>
    [counter] = "counterValue"
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  counterValue = 5;
  //@Input() counterValue = 5;
  
  inc() {
    this.counterValue ++;
  }

  dec() {
    this.counterValue --;
  }

  ngOnInit() {
    //
  }

}
