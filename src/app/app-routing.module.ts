import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  {path: 'quotes', component: QuotesComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: '', component: DashboardComponent },
  {path: 'detail/:id', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
