import {Component, Input, Output, EventEmitter} from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component ({
  selector: 'app-counter',
  template: `
  <div>
  <button (click) = "dec()"> - </button> 
  {{value}}
  <button (click) = "inc()"> + </button> 
  </div>
  `,

  styles: [`
  div{
    border: solid red 1px;
    padding: 10px;
  }
  `]
})

export class CounterComponent{
  constructor(){}

  @Input("counterValue") value;
  @Output() counterChange = new EventEmitter();
  inc(){
    this.value += 1;
    this.counterChange.emit(this.value);
  }

  dec() {
    this.value -= 1;
    this.counterChange.emit(this.value);
  }
}