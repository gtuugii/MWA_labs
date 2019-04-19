import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserdetailsComponent } from './userdetails.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '../guard/auth-guard.service';

@NgModule({
  declarations: [UsersComponent, UserdetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UsersComponent,
        children: [{path: 'detail/:uuid', component: UserdetailsComponent, canActivate: [AuthGuardService]}]
      },
      { path: ':uuid', component: UserdetailsComponent, canActivate: [AuthGuardService]}
    ])
  ],
  exports:[
    UsersComponent,
    UserdetailsComponent
  ]
})
export class UsersModule { }
