import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SmartphoneService } from '../../services/smartphone.service';
import { Smartphone } from '../../models/smartphone.models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-smartphone-list',
  templateUrl: './smartphone-list.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule], // Importation deCommonModule pour utiliser *ngFor 
  styleUrls: ['./smartphone-list.component.css']
})
export class SmartphoneListComponent implements OnInit {
  smartphones: Smartphone[] = []; // tableau pour les smartphones 


  constructor(private smartphoneService: SmartphoneService, private router: Router, private cartService: CartService) { } // Injection du service 

  ngOnInit(): void {
    this.loadSmartphones(); // Charger les smartphones au démarrage 
  }

  // Charger les smartphones depuis le service 
  loadSmartphones(): void {
    this.smartphoneService.getAllSmartphones().subscribe({
      next: (data: Smartphone[]) => {
        this.smartphones = data; // Assigneles données récupérées à la variable 
      },
      error: (err: any) => {
        console.error('Erreur lors de la récupération des smartphones', err);
      }
    });
  }
  //methode pour naviguer vers la page details 
  showDetails(index: number): void {
    console.log('Navigation vers les détails du smartphone avec index:', index);
    this.router.navigate(['/smartphone-details', index]); // Vérifie que la route est bien appelée 
  }
  products = [
    { id: 1, name: 'Samsung Galaxy Note', price: 2000, color: 'Gold', image: 'https://i.pinimg.com/736x/e0/69/36/e06936903e3f4f471a16d1dfb0e37455.jpg' },
    { id: 2, name: 'Pixel 9', price: 1500, color: 'Pink', image: 'https://i.pinimg.com/736x/c8/3f/5a/c83f5acd4614cda77214ac36a2112c81.jpg' },
  ];


  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} has been added to the cart!`);
  }
}