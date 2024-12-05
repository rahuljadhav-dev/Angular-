import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { ErrorComponent } from './error/error.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormspComponent } from './formsp/formsp.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http'
=======
import { LoginComponent } from './login/login.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { RjComponent } from './rj/rj.component';

>>>>>>> 8c6b4307b80efb8a147521129d8e529143b9597c

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
    LoginComponent,
    AboutComponent,
    SupportComponent,
    ErrorComponent,
    AdminDashboardComponent,
    FormspComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
=======
    LoginComponent,
    NavigationbarComponent,
    RjComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> 8c6b4307b80efb8a147521129d8e529143b9597c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
