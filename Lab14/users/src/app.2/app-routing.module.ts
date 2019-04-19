import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule, PreloadAllModules } from '@angular/router';
import { GetdataComponent } from './getdata.component';
import { ErrorComponent } from './error.component';

//import { NotFoundComponent } from '.'

const routes: Routes = [
  //{ path: '', redirectTo: 'users' },
  //{ path: '/', redirectTo: 'users' },
  { path: 'home', component: GetdataComponent },
  { path: 'users', component: GetdataComponent,
      //loadChildren: './users/users.module#UsersModule',
      children: [
        { path: 'update', component: GetdataComponent}
      ] },
  { path: '*', redirectTo: 'users'},
  { path: 'error', component: ErrorComponent}
];

@NgModule({
//  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadingStrategy })],
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  //
  constructor(private router: Router){
    //this.router.navigate(['users', 'update'], {queryParams: {id: 1}});
  }

}
