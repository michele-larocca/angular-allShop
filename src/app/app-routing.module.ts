import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArticoliComponent } from './articoli/articoli.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './servicies/route-guard.service';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'index', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome/:userId', component: WelcomeComponent, canActivate: [RouteGuardService]},
  {path: 'articoli', component: ArticoliComponent, canActivate: [RouteGuardService]},
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
