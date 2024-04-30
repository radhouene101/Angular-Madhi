import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResidenceComponent } from './residence/residence.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app.routing.module';
import { AnnonceModule } from './annonce/annonce.module';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {HttpClientModule} from "@angular/common/http";
import { AppartementComponent } from './appartement/appartement.component';
import { UpdateAppartComponent } from './update-appart/update-appart.component';
import { AddAppartComponent } from './add-appart/add-appart.component';
import { ShowAppartComponent } from './show-appart/show-appart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResidenceComponent,
    HomeComponent,
    NotfoundComponent,
    FormulaireComponent,
    AppartementComponent,
    UpdateAppartComponent,
    AddAppartComponent,
    ShowAppartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
     AnnonceModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
