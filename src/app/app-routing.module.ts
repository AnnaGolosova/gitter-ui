import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OauthLoginComponent } from './oauth/oauth-login/oauth-login.component';

const routes: Routes = [
  {path: '', component: OauthLoginComponent, pathMatch: 'full'},
  {path: 'login', component: OauthLoginComponent},
  {path: 'index', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
