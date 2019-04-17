import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
//  templateUrl: './app.component.html',
  template: `
      <app-smart></app-smart>

      <div appIsVisible [visibility]="true">Visible</div>
      <div appIsVisible [visibility]="false">Invisible</div>
      <br>
      <div appMakebigger>Double click - (makeBigger)</div>
  `,
  styles: [`
      div {color : pink}
  `]
})
export class AppComponent {
  title = 'newComponents';
}
