import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AllComponent } from './event/all/all.component';
import { OngoingComponent } from './event/ongoing/ongoing.component';
import { PastComponent } from './event/past/past.component';
import { UpcomingComponent } from './event/upcoming/upcoming.component';
import { MatchesComponent } from './matches/matches.component';
import { Route } from '@angular/router';
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
import { TicketComponent } from './ticket/ticket/ticket.component';
import { SignupComponent } from './signup/signup.component';
import { OrgloginComponent } from './organization/orglogin/orglogin.component';
import { OrgregisterComponent } from './organization/orgregister/orgregister.component';



const routes: Routes = [
  //{path: '', redirectTo: '/app', pathMatch: 'full'},
  //{path: '', component: AppComponent},
  {path: 'event', component: EventComponent},
  {path: 'event/:gamename', component: AllComponent},
  {path: 'event/:gamename/ongoing', component: OngoingComponent},
  {path: 'event/:gamename/past', component: PastComponent},
  {path: 'event/:gamename/upcoming', component: UpcomingComponent},
  {path: 'matches', component: MatchesComponent},
  {path: 'matches/:gamename', component: AllMatchesComponent},
  {path: 'matches/:gamename/ongoing', component: OngoingMatchesComponent},
  {path: 'matches/:gamename/upcoming', component: UpcomingMatchesComponent},
  {path: 'matches/:gamename/past', component: PastMatchesComponent},


  {path:'user',component:UserComponent},

  
  {path:'register',component:RegisterComponent},

{path:'userlogin',component:UserloginComponent},

{path:'user',component:UserComponent},
{path:'signup',component:SignupComponent,
      children:[
        {path:'userlogin',component:UserloginComponent},
        {path:'orglogin',component:OrgloginComponent},
        {path:'register',component:RegisterComponent},
        {path:'orgregister',component:OrgregisterComponent},
               ]
},
{path:'app-root',component:AppComponent},
{path:'ticket',component:TicketComponent},
{path:'live',component:LiveComponent,
       children:[
                 {path:'dota',component:DotaComponent},
                 {path:'cs-go',component:CsGoComponent}
  
                ]
},
  //{path: "**", component: PageNotFoundComponent} 
];
//const routes: Route[] = [

//{path:'user',component:UserComponent},
//{path:'userlogin',component:UserloginComponent},
//{path:'app-root',component:AppComponent},
//{path:'live',component:LiveComponent,
//children:[
  //{path:'dota',component:DotaComponent},
//{path:'cs-go',component:CsGoComponent}
  
//]
//},



//];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [AppComponent,  PageNotFoundComponent,
  EventComponent, AllComponent,OngoingComponent,PastComponent,UpcomingComponent,
  MatchesComponent,AllMatchesComponent,UpcomingMatchesComponent,OngoingMatchesComponent,PastMatchesComponent]