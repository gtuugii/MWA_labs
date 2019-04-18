import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

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

  constructor(private get: DataService ) {
    //get.getOnlineData();
   }

  ngOnInit() {

  }

}
