import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Smartphone } from '../../models/smartphone.models';

@Component({
  selector: 'app-smartphone-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './smartphone-form.component.html',
  styleUrls: ['./smartphone-form.component.css']
})
export class SmartphoneFormComponent {
  smartphoneForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.smartphoneForm = this.fb.group({
      nom: ['', [Validators.required]],
      marque: ['', [Validators.required]],
      description: ['', [Validators.required]],
      prix: [0, [Validators.required, Validators.min(0)]],
      photo: [null, [Validators.required]],  // Photo est un champ requis
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
      
      // Ici, tu peux appeler ton service API pour envoyer formData
      // Ex: this.apiService.submitSmartphone(formData);
    } else {
      console.error('Le formulaire est invalide.');
    }
  }

  // Méthode pour gérer le changement de fichier photo
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.smartphoneForm.get('photo')?.setValue(file);  // On met à jour le formulaire avec le fichier sélectionné
    }
  }
}
