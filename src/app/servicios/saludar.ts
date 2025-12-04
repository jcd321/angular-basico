import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Saludar {

  Desactivado1: boolean = false;
  Desactivado2: boolean = false;

  saludar() {
    console.log('Botón 1 presionado');
    this.Desactivado2 = !this.Desactivado2; 
  }

  saludar2() {
    console.log('Botón 2 presionado');
    this.Desactivado1 = !this.Desactivado1; 
  }
  
}
