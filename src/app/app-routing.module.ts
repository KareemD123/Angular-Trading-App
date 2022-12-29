import { QuotesComponent } from './quotes/quotes.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent },
  {path: '', component: DashboardComponent },
  {path: 'detail/:id', component: ProfileComponent },
  {path: 'quotes', component: QuotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
