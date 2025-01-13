import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [CommonModule], // Importez CommonModule pour utiliser *ngFor
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css'
})
export class DashboardAdminComponent {
  title='Dashboard';
  public lists: any[] = [
    { nom: 'Home', icon: 'bx bxs-home-smile' },
    { nom: 'Stock', icon: 'bx bxs-package' },
    { nom: 'Commandes', icon: 'bx bxs-cart' },
    { nom: 'Messages', icon: 'bx bxs-envelope' },
    { nom: 'Déconnexion', icon: 'bx bx-log-out-circle' },
];

}
