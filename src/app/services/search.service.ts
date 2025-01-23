import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiUrl = 'https://example.com/api/smartphones'; // Remplacez par votre URL API

  constructor(private http: HttpClient) {}

  /**
   * Rechercher des smartphones selon des critères.
   * @param query La requête de recherche
   * @returns Une liste de smartphones correspondant
   */
  searchSmartphones(query: string): Observable<any[]> {
    if (!query.trim()) {
      // Si la requête est vide, retourner un tableau vide
      return of([]);
    }

    // Exemple : Appel API pour rechercher
    return this.http.get<any[]>(`${this.apiUrl}?q=${query}`).pipe(
      map((results) => results || []), // Traite les résultats
      catchError((error) => {
        console.error('Erreur lors de la recherche:', error);
        return of([]); // Retourne un tableau vide en cas d'erreur
      })
    );
  }
}
