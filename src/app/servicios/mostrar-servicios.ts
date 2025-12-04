import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MostrarServicios {
    servicio:boolean = true;
    modoOscuro: boolean = false;

    mostrarServicios(){
    this.servicio = !this.servicio;
  }

  darkClick(){
    this.modoOscuro = !this.modoOscuro;
    
  }
  
}
