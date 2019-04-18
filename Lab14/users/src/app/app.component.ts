import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //`<base href="/users">`
  template: `
    <div>
      <h1>
        Welcome to {{ title }}!
      </h1>

    <nav>
      <ul>
        <li><a [routerLink]="['home']">Home</a></li>
        <li><a [routerLink]="['users']">Users</a></li>
        <li><a [routerLink]="['users', 'update', '1']">User - Update1</a></li>
        <li><a [routerLink]="['users', 'update']" [queryParams]="{id: 1}">User - Update2</a></li>
        <li><a [routerLink]="['home']" [fragment]="top">Go to top</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
    </div>

  `,
  //providers: [DataService],
  styles: [`
      div{text-align:center}
  `]
})
export class AppComponent {
  title = 'MWA - Lab14';

  constructor(private dataService: DataService){
    this.dataService.getOnlineData();
  }

}
