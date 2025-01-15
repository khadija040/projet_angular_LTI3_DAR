import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Smartphone } from '../../models/smartphone.models';
import { SmartphoneService } from '../../services/smartphone.service'; // Assure-toi que l'importation est correcte

@Component({
  selector: 'app-smartphone-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './smartphone-form.component.html',
  styleUrls: ['./smartphone-form.component.css']
})
export class SmartphoneFormComponent {
  smartphoneForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private smartphoneService: SmartphoneService // Injecte le service ici
  ) {
    this.smartphoneForm = this.fb.group({
      nom: ['', [Validators.required]],
      marque: ['', [Validators.required]],
      description: ['', [Validators.required]],
      prix: [0, [Validators.required, Validators.min(0)]],
      photo: [null, [Validators.required]],
      ram: ['2', [Validators.required]],
      rom: ['32', [Validators.required]],
      ecran: ['', [Validators.required]],
      couleur: ['Noir', [Validators.required]],
    });
  }

  // Soumission du formulaire
  onSubmit() {
    if (this.smartphoneForm.valid) {
      const formData: Smartphone = this.smartphoneForm.value as Smartphone;
      
      // Si une photo est requise mais non fournie, on affiche une erreur
      if (!formData.photo) {
        console.error('Le champ photo est requis.');
        return;
      }

      // Affichage des données du formulaire dans la console
      console.log('Formulaire soumis avec succès:', formData);
      
      // Utilise le service pour envoyer les données
      this.smartphoneService.submitSmartphone(formData).subscribe(
        response => {
          console.log('Réponse de l\'API:', response);
        },
        error => {
          console.error('Erreur lors de l\'envoi des données:', error);
        }
      );
    } else {
      console.error('Le formulaire est invalide.');
    }
  }

  // Méthode pour gérer le changement de fichier photo
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.smartphoneForm.get('photo')?.setValue(file);
    }
  }
}
