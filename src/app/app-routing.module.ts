import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ReportComponent } from './pages/report/report.component';
import { ViewRegDetailsComponent } from './pages/report/view-reg-details/view-reg-details.component';

const routes: Routes = [ 
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reports', component: ReportComponent },
  { path: 'report-details', component:ViewRegDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
