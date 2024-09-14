import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProduitsEtServicesComponent } from './views/base/produitsetservices/produits-et-services.component';
import { RouterModule } from '@angular/router';
import { TooltipComponent } from '@coreui/angular';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsEtServicesComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule, // Add ReactiveFormsModule to imports
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
