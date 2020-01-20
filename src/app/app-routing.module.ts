import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './event/event.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { AllComponent } from './event/all/all.component';
import { OngoingComponent } from './event/ongoing/ongoing.component';
import { PastComponent } from './event/past/past.component';
import { UpcomingComponent } from './event/upcoming/upcoming.component';


const routes: Routes = [
  //{path: '', redirectTo: '/app', pathMatch: 'full'},
 // {path: 'app', component: AppComponent},
  {path: 'event', component: EventComponent},
  {path: 'event/:gamename', component: AllComponent},
  {path: 'event/:gamename/ongoing', component: OngoingComponent},
  {path: 'event/:gamename/past', component: PastComponent},
  {path: 'event/:gamename/upcoming', component: UpcomingComponent},
  //{path: "**", component: PageNotFoundComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [AppComponent, EventComponent, PageNotFoundComponent,AllComponent,OngoingComponent,PastComponent,UpcomingComponent]