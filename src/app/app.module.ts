import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'; // Import your routing module here

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NewPageComponent } from './new-page/new-page.component';
import { Offre1Component } from './offre1/offre1.component';
import { Offre2Component } from './offre2/offre2.component';
import { Offre3Component } from './offre3/offre3.component';
import { Offre4Component } from './offre4/offre4.component';
import { Offre5Component } from './offre5/offre5.component';
import { Offre6Component } from './offre6/offre6.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AuthAdmiComponent } from './auth-admi/auth-admi.component';
import { ChoixFacComponent } from './choix-fac/choix-fac.component';
import { ResultatComponent } from './resultat/resultat.component';
import { UserService } from './resultat/user-service/user-service.service';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DataService } from './confirmation/data.service';
import { SharedDataService } from './shared-data.service'; 
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    NewPageComponent,
    Offre1Component,
    Offre2Component,
    Offre3Component,
    Offre4Component,
    Offre5Component,
    Offre6Component,
    UserInfoComponent,
    AboutUsComponent,
    AuthAdmiComponent,
    ChoixFacComponent,
    ResultatComponent,
    ConfirmationComponent,
    // Add any other components you want to use in your app here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule, // Add your routing module to the imports array
  ],
  providers: [DataService, SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }


