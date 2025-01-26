import { Component } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { SearchComponent } from '../../pages/search/search.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'app-accueil-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, CarouselComponent, SlideComponent],
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
    this.router.navigate(['/details', index]);  // Passage de l'ID
  }

  showList(index: number): void {
    console.log('Navigation vers la liste des smartphones avec index:', index);
    this.router.navigate(['/smartphone-list', index]); // Vérifie que la route est bien appelée 
  }
  Login(index: number): void {
    console.log('Navigation vers la page de connexion avec index:', index);
    this.router.navigate(['/login', index]); // Vérifie que la route est bien appelée 
  }
  activeSlide = 0;
  slides = [
    {
      imgUrl: 'https://i.pinimg.com/474x/97/07/75/970775933a7253548c8b3c4e97a1c233.jpg',
      title: 'Galaxy A52 - Lilas',
      price: 449,
      originalPrice: 699,
      discount: 39,
      rating: 5,
    },
    {
      imgUrl: 'https://i.pinimg.com/474x/4d/85/e5/4d85e5462907a0e162b4f0192e4f95b3.jpg',
      title: 'Google Pixel 8 - Pink',
      price: 1149,
      originalPrice: 1399,
      discount: 30,
      rating: 5,
    },
    {
      imgUrl: 'https://i.pinimg.com/474x/19/cb/94/19cb94f6db6bfde2aebf497ed2a7a2bd.jpg',
      title: 'Sonny XPeria 5- Purple',
      price: 119,
      originalPrice: 299,
      discount: 70,
      rating: 3,
    },
    {
      imgUrl: 'https://i.pinimg.com/736x/ae/b4/3e/aeb43ec5e7eeeaf77b429f979b0fcffc.jpg',
      title: 'Galaxy S24 Ultra - Red',
      price: 849,
      originalPrice: 999,
      discount: 49,
      rating: 4,
    },
    {
      imgUrl: 'https://i.pinimg.com/474x/c7/de/f4/c7def42564f3900acd936c697534f077.jpg',
      title: 'Xiaomi Mi Mix Alpha - Blue',
      price: 564,
      originalPrice: 674,
      discount: 16,
      rating: 4,
    },
    // Tu peux ajouter plus de slides ici
  ];

  prevSlide(): void {
    this.activeSlide = this.activeSlide === 0 ? this.slides.length - 1 : this.activeSlide - 1;
  }

  nextSlide(): void {
    this.activeSlide = this.activeSlide === this.slides.length - 1 ? 0 : this.activeSlide + 1;
  }
}
const routes: Routes = [
  { path: '', component: Component }, // Page d'accueil
  { path: 'search', component: SearchComponent }, // Page de recherche
];
