import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  imports: [],
  templateUrl: './ciclo-vida.html',
  styleUrl: './ciclo-vida.css',
})
export class CicloVida implements OnInit, OnDestroy{

  ngOnInit(): void {
    console.log('Ciclo de vida: Componente inicializado');
  }

  ngOnDestroy(): void {
    console.log('Ciclo de vida: Componente destruido'); 
  }
}
