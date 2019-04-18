import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { GetdataComponent } from './getdata.component';

//import { NotFoundComponent } from '.'

const routes: Routes = [
  //{ path: '', redirectTo: 'users' },
  //{ path: '/', redirectTo: 'users' },
  { path: 'home', component: GetdataComponent },
  { path: 'users', component: GetdataComponent,
      children: [
        { path: 'update', component: GetdataComponent}
      ] },
  { path: '*', redirectTo: 'users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  //
  constructor(private router: Router){
    //this.router.navigate(['users', 'update'], {queryParams: {id: 1}});
  }

}
