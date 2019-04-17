import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetOnlineDataService } from './get-online-data.service';

@Component({
  selector: 'app-getdata',
  template: `
    <p>
      getdata works!
    </p>
    <button (click)="get()"> Get Data from ... </button>
  `,
  styles: []
})
export class GetdataComponent implements OnInit {

  constructor(private get: GetOnlineDataService ) {
    //get.getOnlineData();
   }

  ngOnInit() {

  }

}
