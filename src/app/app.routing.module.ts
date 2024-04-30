import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {FormulaireComponent} from "./formulaire/formulaire.component";
import {AppartementComponent} from "./appartement/appartement.component";
import {UpdateAppartComponent} from "./update-appart/update-appart.component";
import {AddAppartComponent} from "./add-appart/add-appart.component";
import {ShowAppartComponent} from "./show-appart/show-appart.component";


const ROUTES:Routes=[
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"residence",component:ResidenceComponent},
  {path:"Formulaire",component:FormulaireComponent},
  {path:"Appartement", component:AppartementComponent},
  {path:"update/:id", component:UpdateAppartComponent},
  {path:"addAppart", component:AddAppartComponent},
  {path:"showAppart/:id", component:ShowAppartComponent},
  {path:"**",component:NotfoundComponent}
 ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
