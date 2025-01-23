import { Component, NgModule } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { SmartphoneFormComponent } from "./components/smartphone-form/smartphone-form.component";
// import { DashboardAdminComponent } from "./components/dashboard-admin/dashboard-admin.component";
import { AccueilComponentComponent } from "./components/accueil-component/accueil-component.component";
import { RouterModule } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})

export class AppComponent {
  title = 'gestion_smartphones';
}
