import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMakebigger]'
})
export class MakebiggerDirective {

  constructor() { }

  @HostBinding("style.fontSize") fontSize = "18px";
  @HostListener("dblclick") bigger() {
    this.fontSize = parseInt(this.fontSize) + 2 + "px";
  }

}
