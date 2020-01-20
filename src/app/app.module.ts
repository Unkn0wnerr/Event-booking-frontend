import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllComponent } from './event/all/all.component';
import { UpcomingComponent } from './event/upcoming/upcoming.component';
import { OngoingComponent } from './event/ongoing/ongoing.component';
import { PastComponent } from './event/past/past.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    PageNotFoundComponent,
    AllComponent,
    UpcomingComponent,
    OngoingComponent,
    PastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
