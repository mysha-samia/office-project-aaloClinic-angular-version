import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './template/home/home.component';
import { AboutUsComponent } from './template/about-us/about-us.component';
import { ContactUsComponent } from './template/contact-us/contact-us.component';
import { DashboardComponent } from './template/dashboard/dashboard.component';
import { ActivitiesComponent } from './template/activities/activities.component';
import { StakeholdersComponent } from './template/stakeholders/stakeholders.component';
import { CarrerComponent } from './template/carrer/carrer.component';
import { EventsComponent } from './template/events/events.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    DashboardComponent,
    ActivitiesComponent,
    StakeholdersComponent,
    CarrerComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
