import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Smartphone } from '../models/smartphone.models'; 

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {
  getAllSmartphones(): Observable<Smartphone[]> {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:3000/smartphones';  // URL de ton API

  constructor(private http: HttpClient) {}

  // Méthode pour envoyer un smartphone sous forme de JSON
  submitSmartphone(smartphone: Smartphone): Observable<any> {
    const smartphoneData = {
      nom: smartphone.nom,
      marque: smartphone.marque,
      description: smartphone.description,
      prix: smartphone.prix,
      photo: smartphone.photo,  // Si tu veux envoyer un URL de photo, remplace par une chaîne de caractères
      ram: smartphone.ram,
      rom: smartphone.rom,
      ecran: smartphone.ecran,
      couleur: smartphone.couleur
    };

    // Envoie les données sous forme de JSON
    return this.http.post<any>(this.apiUrl, smartphoneData);
  }
}
