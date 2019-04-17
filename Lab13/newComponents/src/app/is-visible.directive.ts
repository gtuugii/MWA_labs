import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {

  @Input() visibility = true;
  @HostBinding('style.display') display;
  constructor() { }

  ngOnInit() {
    if (this.visibility)
      this.display = 'block';
    else
      this.display = "none";
  } 

}
