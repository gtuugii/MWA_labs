import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //template: `<app-counter></app-counter>`,
//    < input[placeholder]="title" { input } = "do()" />
//    < input[placeholder]="usernameProp" { input } = "do()" />
//    < input[value]="title" #tag(keyup) = "tag.value" /> {{ tag.value }}
  template: `
  <div>
    Counter Component 
    <app-counter [counterValue]="componentCounterValue" (counterChange)="counterChange($event)">
    </app-counter>
    <br/>
    Component Counter Value = {{componentCounterValue}}
  </div>
  `,
  styles: [`
    div {
        border: solid green 1px;
        display: inline-block;
      }
    app-counter {
        align : center;
        display: inline-block;
        padding: 30px;
        font-size: 18pt;
      }`],
})
export class AppComponent {
  componentCounterValue = 5;
  counterChange(val) { this.componentCounterValue = val; }
}
