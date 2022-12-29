import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuotesService } from './quotes/quotes.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TraderListComponent } from './trader-list/trader-list.component';
import { TraderListService } from './trader-list/trader-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { TraderListFormComponent } from './trader-list/trader-list-form/trader-list-form.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesListComponent } from './quotes-list/quotes-list.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    TraderListComponent,
    TraderListFormComponent,
    ProfileComponent,
    QuotesComponent,
    QuotesListComponent
  ],
  imports: [
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [TraderListService, QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
