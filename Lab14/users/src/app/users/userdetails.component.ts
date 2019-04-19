import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-userdetails',
  template: `
    <p>
      userdetails works!
    </p>
  `,
  styles: []
})
export class UserdetailsComponent implements OnInit {
  private userDetail: any;
  constructor(private dataService: DataService, private route: ActivatedRoute) { 
    route.params.subscribe( params => this.userDetail = dataService.getCachedData()[parseInt(params['uuid'])] );
  }

  ngOnInit() {
  }

}
