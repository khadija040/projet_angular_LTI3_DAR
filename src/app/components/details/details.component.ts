import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  id!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;  // récupère l'id depuis l'URL
    console.log('ID du smartphone:', this.id);  // Vérifie que l'ID est bien récupéré
  }
}
