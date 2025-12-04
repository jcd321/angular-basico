import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlternarVista {

  mostrarAlerta = false;
  mensajeAlerta = 'Este es un mensaje de ejemplo del sistema.';
  mostrarSoloPendientes = false;

  servicios: string[] = [
    'Servicios de actualizacion',
    'Servicios de mantenimiento',
    'Servicios de soporte tecnico',
    'Servicios de consultoria'
  ];
  
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
