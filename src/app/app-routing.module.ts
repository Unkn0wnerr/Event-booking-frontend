import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UserComponent } from './user/user/user.component';
import { UserloginComponent } from './user/user/userlogin/userlogin.component';
import { AppComponent } from './app.component';
import { LiveComponent } from './live/live.component';
import { DotaComponent } from './live/dota/dota.component';
import { CsGoComponent } from './live/cs-go/cs-go.component';


const routes: Route[] = [

{path:'user',component:UserComponent},
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
