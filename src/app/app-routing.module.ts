import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AllComponent } from './event/all/all.component';
import { OngoingComponent } from './event/ongoing/ongoing.component';
import { PastComponent } from './event/past/past.component';
import { UpcomingComponent } from './event/upcoming/upcoming.component';
import { MatchesComponent } from './matches/matches.component';

import { UserComponent } from './user/user/user.component';
import { UserloginComponent } from './user/user/userlogin/userlogin.component';
import { AppComponent } from './app.component';
import { LiveComponent } from './live/live.component';
import { DotaComponent } from './live/dota/dota.component';
import { CsGoComponent } from './live/cs-go/cs-go.component';

import { AllMatchesComponent } from './matches/all-matches/all-matches.component';
import { OngoingMatchesComponent } from './matches/ongoing-matches/ongoing-matches.component';
import { UpcomingMatchesComponent } from './matches/upcoming-matches/upcoming-matches.component';
import { PastMatchesComponent } from './matches/past-matches/past-matches.component';
import { RegisterComponent } from './user/register/register.component';
import { EventPageComponent } from './event/event-page/event-page.component';
import { TicketComponent } from './ticket/ticket/ticket.component';
import { SignupComponent } from './signup/signup.component';
import { OrgloginComponent } from './organization/orglogin/orglogin.component';
import { OrgregisterComponent } from './organization/orgregister/orgregister.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { LogoutComponent } from './logout/logout.component';
import { OrganizationComponent } from './organization/organization.component';
import { AdminComponent } from './admin/admin.component';
import { EventregisterComponent } from './event/eventregister/eventregister.component';

const routes: Routes = [
  {path: 'organization',component:OrganizationComponent,canActivate:[AuthGaurdService]},
  {path: 'event', component: EventComponent},
 
  {path: 'event/:gamename', component: AllComponent,
           children:[ {path:'eventregister',component:EventregisterComponent,canActivate:[AuthGaurdService]},]
            },
  {path: 'event/:gamename/ongoing', component: OngoingComponent},
  {path: 'event/:gamename/past', component: PastComponent},
  {path: 'event/:gamename/upcoming', component: UpcomingComponent},
  {path: 'matches', component: MatchesComponent},
  {path: 'matches/:gamename', component: AllMatchesComponent},
  {path: 'matches/:gamename/ongoing', component: OngoingMatchesComponent},
  {path: 'matches/:gamename/upcoming', component: UpcomingMatchesComponent},
  {path: 'matches/:gamename/past', component: PastMatchesComponent},
  {path: 'event/eventpage/:id', component: EventPageComponent,
           children:[{path:'ticket',component:TicketComponent},]
              },
  {path: 'logout',component:LogoutComponent,canActivate:[AuthGaurdService]},
  {path: 'userlogin',component:UserloginComponent},
  {path: 'user',component:UserComponent,canActivate:[AuthGaurdService]},
  
  {path: 'signup',component:SignupComponent,
      children:[
        {path:'userlogin',component:UserloginComponent},
        {path:'orglogin',component:OrgloginComponent},
        {path:'register',component:RegisterComponent},
        {path:'orgregister',component:OrgregisterComponent},
        {path: 'admin',component:AdminComponent},
               ]
},

//,canActivate:[AuthGaurdService]},
{path:'live',component:LiveComponent,
       children:[
                 {path:'dota',component:DotaComponent},
                 {path:'cs-go',component:CsGoComponent}
  
                ]
},
  //{path: "**", component: PageNotFoundComponent} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [AppComponent,  PageNotFoundComponent,AdminComponent,
  EventComponent, AllComponent,OngoingComponent,PastComponent,UpcomingComponent,LogoutComponent,
  MatchesComponent,AllMatchesComponent,UpcomingMatchesComponent,OngoingMatchesComponent,PastMatchesComponent,
  EventPageComponent]
