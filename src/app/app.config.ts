import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Importer withFetch
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AccueilComponentComponent } from './components/accueil-component/accueil-component.component';
import { SmartphoneListComponent } from './components/smartphone-list/smartphone-list.component';

const appRoutes: Routes = [
  { path: 'home', component: AccueilComponentComponent }, // Page d'accueil
  { path: 'List', component: SmartphoneListComponent }, // Liste des produits
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
      RouterModule // Fournit RouterModule pour gérer router-outlet 
    ), 
  ],
};