import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `<b>{{row.key}}</b> - <em>{{row.course}}</em>`,
  styles: [`
      em{ color: blue}
      div{ color: red}
  `]
})
export class DumbComponent implements OnInit {
  @Input() row;
  constructor() { }

  ngOnInit() {
  }

}
