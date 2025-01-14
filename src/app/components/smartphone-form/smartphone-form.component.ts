import { Component } from '@angular/core';
import{FormBuilder,FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';
import { Smartphone} from '../../models/smartphone.models';


@Component({
  selector: 'app-smartphone-form',
  imports: [],
  templateUrl: './smartphone-form.component.html',
  styleUrl: './smartphone-form.component.css'
  standalone: true,  // Si vous utilisez l'approche de composants autonomes, ajoutez cette ligne
  imports: [ReactiveFormsModule] 
})
export class SmartphoneFormComponent {
  smartphoneForm: FormGroup;//formgroup pour utiliser les methodes valid value dirty

constructor(private fb: FormBuilder){
  this.smartphoneForm = this.fb.group({
    nom: ['',[Validators.required]],
    marque: ['',[Validators.required]],
    description: ['',[Validators.required]],
    prix: [0,[Validators.required,Validators.min(0)]],
    photo: ['',[Validators.required]],
    ram: ['',[Validators.required,Validators.min(1)]],
    rom: ['',[Validators.required,Validators.min(1)]],
    ecran: ['',[Validators.required]],
    couleur: ['',[Validators.required]],
  });
}

 //soumission du formulaire
 onSubmit() {
  if (this.smartphoneForm.valid) {
    const formData: Smartphone = this.smartphoneForm.value as Smartphone; // Conversion explicite
    console.log('Formulaire soumis avec succès :', formData);
    // Appelle ton service API avec `formData`
  } else {
    console.error('Formulaire invalide.');
  }
}
}