import { Component } from '@angular/core';
import { Saludar } from '../../servicios/saludar';
import { MostrarServicios } from '../../servicios/mostrar-servicios';
import { AlternarVista } from '../../servicios/alternar-vista';


@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [],
})
export class Home {
  titulo: string = 'Mi Primera App Angular';

  Desactivado1: boolean = false;
  Desactivado2: boolean = false;

  servicio:boolean = true;
  modoOscuro: boolean = false;

  constructor(public saludarService: Saludar, public mostrarServiciosService: MostrarServicios, public alternarVistaService: AlternarVista) {}

  mostrarServicios() {
    this.servicio = !this.servicio;
  }

  darkClick(){
    this.modoOscuro = !this.modoOscuro;
  }

  alternarVista() {
    this.alternarVistaService.alternarVista();
  }

  abrirModal() {
    this.alternarVistaService.abrirModal();
  }

  clearAlert() {
    this.alternarVistaService.cerrarAlerta();
  }
}