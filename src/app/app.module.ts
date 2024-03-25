import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exercise3ComponentComponent } from './exercise3-component/exercise3-component.component';
import { CapitalizeDirective } from './capitalize.directive';

@NgModule({
  declarations: [
    AppComponent,
    Exercise3ComponentComponent,
    CapitalizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
