import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SmartphoneService } from '../../services/smartphone.service';
import { Smartphone } from '../../models/smartphone.models';

@Component({
  selector: 'app-smartphone-list',
  templateUrl: './smartphone-list.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule], // Importation deCommonModule pour utiliser *ngFor 
  styleUrls: ['./smartphone-list.component.css']
})
export class SmartphoneListComponent implements OnInit {
  smartphones: Smartphone[] = []; // tableau pour les smartphones 


  constructor(private smartphoneService: SmartphoneService, private router: Router) { } // Injection du service 

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
  //methode pour modifier un smartphone 
  // Méthode pour rediriger vers la page de modification 
  editSmartphone(index: number): void {
    console.log('Navigation vers la modification du smartphone avec index:', index);
    this.router.navigate(['/smartphone-form', index]);  // Redirection vers le formulaire de modification avec l'index 
  }
}