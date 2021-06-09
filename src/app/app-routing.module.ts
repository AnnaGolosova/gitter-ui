import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { OauthLoginComponent } from './oauth/oauth-login/oauth-login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: '', component: OauthLoginComponent, pathMatch: 'full'},
  {path: 'login', component: OauthLoginComponent},
  {path: 'index', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
