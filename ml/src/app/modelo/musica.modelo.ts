import { SafeResourceUrl } from "@angular/platform-browser";

export interface Musica {
    id: number;
    nome: string;
    autor: string;
    link: string;
    cifra: string;
    urlSafe: SafeResourceUrl;
}