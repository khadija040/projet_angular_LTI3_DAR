export interface Smartphone {
  nom: string;
  marque: string;
  description: string;
  prix: number;
  photo: File | null; // Assurez-vous que la photo est un fichier ou null
  ram: string;
  rom: string;
  ecran: string;
  couleur: string;
}
