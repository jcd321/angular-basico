import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  imports: [],
  templateUrl: './ciclo-vida.html',
  styleUrl: './ciclo-vida.css',
})
export class CicloVida implements OnInit{

  // Estados de los botones (true = activo, false = desactivado)
  boton1Activo: boolean = true;
  boton2Activo: boolean = true;

  ngOnInit(): void {
    console.log('Ciclo de vida: Componente inicializado');
  }

  // Método para manejar el click del Botón 1
  toggleBoton1(): void {
    this.boton1Activo = !this.boton1Activo; // Alterna su propio estado
    if (!this.boton1Activo) {
      this.boton2Activo = false; // Desactiva el Botón 2
    }
  }

  // Método para manejar el click del Botón 2
  toggleBoton2(): void {
    this.boton2Activo = !this.boton2Activo; // Alterna su propio estado
    if (!this.boton2Activo) {
      this.boton1Activo = false; // Desactiva el Botón 1
    }
  }

}
