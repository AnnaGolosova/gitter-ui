import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { OauthLoginComponent } from './oauth/oauth-login/oauth-login.component';
import { OauthHeaderComponent } from './oauth/oauth-header/oauth-header.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomsComponent } from './components/rooms/rooms.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    OauthLoginComponent,
    OauthHeaderComponent,
    RoomsComponent,
    NotFoundPageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
