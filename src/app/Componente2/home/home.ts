import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [],
})
export class Home {
setClasses() {
throw new Error('Method not implemented.');
}
message: any;
clearAlert() {
throw new Error('Method not implemented.');
}
showAlert(arg0: string) {
throw new Error('Method not implemented.');
}

  titulo: string = 'Mi Primera App Angular';

  Desactivado1: boolean = false;
  Desactivado2: boolean = false;

  servicio:boolean = true;
  modoOscuro: boolean = false;

  mostrarAlerta = false;
  mensajeAlerta = 'Este es un mensaje de ejemplo del sistema.';
  mostrarSoloPendientes = false;

  servicios: string[] = [
    'Servicios de actualizacion',
    'Servicios de mantenimiento',
    'Servicios de soporte tecnico',
    'Servicios de consultoria'
  ];
  
  type: string | undefined;

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

alternarVista() {
this.mostrarSoloPendientes = !this.mostrarSoloPendientes;

  if (this.mostrarSoloPendientes) {
  this.mensajeAlerta = '¡Filtro activado! Mostrando solo temas pendientes.';
  } else {
  this.mensajeAlerta = 'Filtro desactivado. Mostrando todos los temas.';
  }
  this.mostrarAlerta = true;
  }
  abrirModal() {
    this.mensajeAlerta = '';
    this.mostrarAlerta = true;
  }

  cerrarAlerta() {
    this.mostrarAlerta = false;
  }
}
