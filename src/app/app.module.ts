import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReportComponent } from './pages/report/report.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginModelComponent } from './components/login-model/login-model.component'; 
import { FormsModule } from '@angular/forms';
import { ViewRegDetailsComponent } from './pages/report/view-reg-details/view-reg-details.component'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ReportComponent,
    HomeComponent,
    LoginModelComponent,
    ViewRegDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
