import { Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { SearchComponent } from '../../pages/search/search.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-accueil-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule ],
  template: `<div><img [src]="imagePath" alt="" /></div>`,
  templateUrl: './accueil-component.component.html',
  styleUrl: './accueil-component.component.css'
})

export class AccueilComponentComponent {
  imagePath: string = 'assets/accueil-img.png';
  searchQuery: string = '';
  smartphones: any;
  i!: number;

  constructor(private router: Router) { }

  onSearch(query: string): void {
    if (query.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: query } });
    }
  }
  showDetails(index: number): void { 
    console.log('Navigation vers les détails du smartphone avec index:', index); 
    this.router.navigate(['/smartphone-details', index]); // Vérifie que la route est bien appelée 
  } 
  showList(index: number): void { 
    console.log('Navigation vers la liste des smartphones avec index:', index); 
    this.router.navigate(['/smartphone-list', index]); // Vérifie que la route est bien appelée 
  } 
}
const routes: Routes = [
  { path: '', component: Component }, // Page d'accueil
  { path: 'search', component: SearchComponent }, // Page de recherche
];
