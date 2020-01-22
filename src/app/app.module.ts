import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AllComponent } from './event/all/all.component';
import { UpcomingComponent } from './event/upcoming/upcoming.component';
import { OngoingComponent } from './event/ongoing/ongoing.component';
import { PastComponent } from './event/past/past.component';
import { MatchesComponent } from './matches/matches.component';
import { HttpClientModule } from '@angular/common/http';
import { AllMatchesComponent } from './matches/all-matches/all-matches.component';
import { OngoingMatchesComponent } from './matches/ongoing-matches/ongoing-matches.component';
import { UpcomingMatchesComponent } from './matches/upcoming-matches/upcoming-matches.component';
import { PastMatchesComponent } from './matches/past-matches/past-matches.component';
import { HttpClient} from '@angular/common/http';

import { UserloginComponent } from './user/user/userlogin/userlogin.component';

import { LiveComponent } from './live/live.component';
import { DotaComponent } from './live/dota/dota.component';
import { CsGoComponent } from './live/cs-go/cs-go.component';


import { UserComponent } from './user/user/user.component';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    PageNotFoundComponent,
    AllComponent,
    UpcomingComponent,
    OngoingComponent,
    PastComponent,
    MatchesComponent,
    AllMatchesComponent,
    OngoingMatchesComponent,
    UpcomingMatchesComponent,
    PastMatchesComponent,
    UserComponent,
    UserloginComponent,
    LiveComponent,
    DotaComponent,
    CsGoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
