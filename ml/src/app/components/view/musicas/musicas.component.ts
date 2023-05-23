import { Component, OnInit } from '@angular/core';
import { MusicasService } from '../../service/musicas.service';
import { Musica } from 'src/app/modelo/musica.modelo';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})
export class MusicasComponent implements OnInit {
  
  musicas!: Musica[];

  constructor(
    private musicasService: MusicasService,
    public sanitizer: DomSanitizer
    ){}

  ngOnInit(): void {
    this.musicasService.read().subscribe(musicas => {
      this.musicas = musicas;
      this.musicas.forEach(musica => {
        musica.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(musica.link);
      })
      
    })
  }
  
}
