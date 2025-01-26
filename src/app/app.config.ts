import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Importer withFetch
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AccueilComponentComponent } from './components/accueil-component/accueil-component.component';
import { SmartphoneListComponent } from './components/smartphone-list/smartphone-list.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { FormsModule } from '@angular/forms';
import { CartComponentComponent } from './components/cart-component/cart-component.component';
import { DetailsComponent } from './components/details/details.component';
import { ContactComponent } from './components/contact/contact.component';
const appRoutes: Routes = [
  { path: 'home', component: AccueilComponentComponent }, // Page d'accueil
  { path: 'List', component: SmartphoneListComponent }, // Liste des produits
  {path: 'Cart', component: CartComponentComponent}, // Panier
  {path: 'Login', component: LoginComponentComponent}, // Page de connexion
  {path: 'details/:id', component: DetailsComponent}, // Détails d'un produit
  {path: 'Contact', component: ContactComponent}, // Page de contact
  { path: '**', redirectTo: 'home' }, // Gestion des routes inconnues
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()), // Activer fetch ici
    importProvidersFrom( 
      BrowserModule,  
      CommonModule,  
      RouterModule,
      FormsModule
    ), 
  ],
};