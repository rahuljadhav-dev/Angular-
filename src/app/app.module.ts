import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { RjComponent } from './rj/rj.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationbarComponent,
    RjComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
