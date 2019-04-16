import { Component, ViewChild } from '@angular/core';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //template: `<app-counter></app-counter>`,
//    < input[placeholder]="title" { input } = "do()" />
//    < input[placeholder]="usernameProp" { input } = "do()" />
//    < input[value]="title" #tag(keyup) = "tag.value" /> {{ tag.value }}
  template : `
    <input [value]="title" #tag (keyup)="whatever = tag.value" />{{tag.value}}
    <button (click)="do()">clickme</button>
    {{whatever}}

    <scratch [monday]="title"><p #pero>Parapara here</p></scratch>
  `,
  styles: []
  //styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('tag') newValue;
  
  whatever;

  title = 'myCounter';
  usernameProp = 'username';

  do(){
    this.whatever = this.newValue.nativeElement.value;
  }
}
