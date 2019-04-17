import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DumbComponent } from './dumb.component';
import { SmartComponent } from './smart.component';
import { IsVisibleDirective } from './is-visible.directive';
import { MakebiggerDirective } from './makebigger.directive';

@NgModule({
  declarations: [
    AppComponent,
    DumbComponent,
    SmartComponent,
    IsVisibleDirective,
    MakebiggerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
