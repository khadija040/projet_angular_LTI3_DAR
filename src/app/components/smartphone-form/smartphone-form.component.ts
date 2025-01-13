import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-smartphone-form',
  imports: [],
  templateUrl: './smartphone-form.component.html',
  styleUrl: './smartphone-form.component.css'
})
export class SmartphoneFormComponent {
  smartphone = {
    nom: '',
    marque: '',
    description: '',
    prix: 0,
    photo: '',
    ram: null,
    rom: '',
    ecran: '',
    couleurs: '',
  };

  onSubmit() {
    console.log('Smartphone ajouté :', this.smartphone);
    alert('Smartphone ajouté avec succès !');
    this.smartphone = { nom: '', marque: '', description: '', prix:0 ,
     photo:'', ram: null, rom:'', ecran:'', couleurs:'' }; // Réinitialiser le formulaire
  }
}