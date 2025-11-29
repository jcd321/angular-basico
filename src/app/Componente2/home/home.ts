import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  titulo: string = 'Mi Primera App Angular';

  Desactivado1: boolean = false;
  Desactivado2: boolean = false;

  servicio:boolean = true;
  modoOscuro: boolean = false;

  servicios: string[] = [
    'Servicios de actualizacion',
    'Servicios de mantenimiento',
    'Servicios de soporte tecnico',
    'Servicios de consultoria'
  ];

  saludar() {
    console.log('Botón 1 presionado');
    this.Desactivado2 = !this.Desactivado2; 
  }

  saludar2() {
    console.log('Botón 2 presionado');
    this.Desactivado1 = !this.Desactivado1; 
  }

  mostrarServicios(){
    this.servicio = !this.servicio;
  }

  darkClick(){
    this.modoOscuro = !this.modoOscuro;
  }

}
