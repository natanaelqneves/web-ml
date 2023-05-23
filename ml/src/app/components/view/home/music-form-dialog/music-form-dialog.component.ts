import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MusicasService } from 'src/app/components/service/musicas.service';

@Component({
  selector: 'app-music-form-dialog',
  templateUrl: './music-form-dialog.component.html',
  styleUrls: ['./music-form-dialog.component.css']
})
export class MusicFormDialogComponent implements OnInit {

  public musicaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<MusicFormDialogComponent>,
    private musicaServive: MusicasService

  ) { }

  ngOnInit(): void {
    this.musicaForm = this.fb.group({
      nome: ['', [Validators.required]],
      autor:  ['', [Validators.required]],
      link:  ['', [Validators.required]],
      cifra:  ['', [Validators.required]]
    });
  }

  addMusica(): void {
    this.musicaServive.postMusica(this.musicaForm.value).subscribe(result => {});
    this.dialogRef.close();
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
