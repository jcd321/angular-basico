import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  titulo: string = 'Mi Primera App Angular';

  boton1Desactivado: boolean = false;
  boton2Desactivado: boolean = false;

  saludar() {
    console.log('Botón 1 presionado');
    this.boton2Desactivado = !this.boton2Desactivado; 
  }

  saludar2() {
    console.log('Botón 2 presionado');
    this.boton1Desactivado = !this.boton1Desactivado; 
  }
}
