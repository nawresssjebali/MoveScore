import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NewPageComponent } from './new-page/new-page.component';
import { Offre1Component } from './offre1/offre1.component';
import { Offre2Component } from './offre2/offre2.component';
import { Offre3Component } from './offre3/offre3.component';
import { Offre4Component } from './offre4/offre4.component';
import { Offre5Component } from './offre5/offre5.component';
import { Offre6Component } from './offre6/offre6.component';
import { AuthAdmiComponent } from './auth-admi/auth-admi.component'; 
import { ChoixFacComponent } from './choix-fac/choix-fac.component';
import {ResultatComponent } from './resultat/resultat.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';



const routes: Routes = [
  { path: '', redirectTo: '/about-us', pathMatch: 'full' }, // Redirect to About Us
  { path: 'about-us', component: AboutUsComponent }, // About Us route
  { path: 'login', component: LoginFormComponent },
  { path: 'new-page', component: NewPageComponent },
  { path: 'offre1', component: Offre1Component }, 
  { path: 'offre2', component: Offre2Component }, 
  { path: 'offre3', component: Offre3Component },
  { path: 'offre4', component: Offre4Component },
  { path: 'offre5', component: Offre5Component },
  { path: 'offre6', component: Offre6Component },
  { path: 'auth-admin', component: AuthAdmiComponent },
  { path: 'choix-fac', component:ChoixFacComponent },
  { path: 'resultat', component:ResultatComponent },
  { path: 'confirmation', component: ConfirmationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents=[AboutUsComponent, Offre1Component, Offre2Component, Offre3Component, Offre4Component, Offre5Component, Offre6Component]






