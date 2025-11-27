import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  imports: [],
  templateUrl: './ciclo-vida.html',
  styleUrl: './ciclo-vida.css',
})
export class CicloVida implements OnInit{

  ngOnInit(): void {
    console.log('Ciclo de vida: Componente inicializado');
  }



}
