import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Musica } from 'src/app/modelo/musica.modelo';

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  url = "http://localhost:3001/musicas"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public read(): Observable<Musica[]> {
    return this.http.get<Musica[]>(this.url);
  }

  public postMusica(musica: Musica): Observable<Musica>{
    return this.http.post<any>(this.url, musica, this.httpOptions);
  }
}
