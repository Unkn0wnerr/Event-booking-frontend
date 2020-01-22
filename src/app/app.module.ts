import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { UserService } from './user/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserloginComponent } from './user/user/userlogin/userlogin.component';

import { LiveComponent } from './live/live.component';
import { DotaComponent } from './live/dota/dota.component';
import { CsGoComponent } from './live/cs-go/cs-go.component';

@NgModule({
  declarations: [
    AppComponent, 
    UserComponent,
    UserloginComponent,
   
    LiveComponent,
   
    DotaComponent,
   
    CsGoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
