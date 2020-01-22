import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UserComponent } from './user/user/user.component';
import { UserloginComponent } from './user/user/userlogin/userlogin.component';
import { AppComponent } from './app.component';
import { LiveComponent } from './live/live.component';
import { DotaComponent } from './live/dota/dota.component';
import { CsGoComponent } from './live/cs-go/cs-go.component';

<<<<<<< Updated upstream
=======
import { AllMatchesComponent } from './matches/all-matches/all-matches.component';
import { OngoingMatchesComponent } from './matches/ongoing-matches/ongoing-matches.component';
import { UpcomingMatchesComponent } from './matches/upcoming-matches/upcoming-matches.component';
import { PastMatchesComponent } from './matches/past-matches/past-matches.component';
import { RegisterComponent } from './user/register/register.component';

>>>>>>> Stashed changes

const routes: Route[] = [

<<<<<<< Updated upstream
{path:'user',component:UserComponent},
=======
  {path:'user',component:UserComponent},
  {path:'register',component:RegisterComponent},
>>>>>>> Stashed changes
{path:'userlogin',component:UserloginComponent},
{path:'app-root',component:AppComponent},
{path:'live',component:LiveComponent,
children:[
  {path:'dota',component:DotaComponent},
{path:'cs-go',component:CsGoComponent}
  
]
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
