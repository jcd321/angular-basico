import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Validador } from '../../servicios/validador';

@Component({
  selector: 'app-refactorizar',
  imports: [CommonModule, FormsModule],
  templateUrl: './refactorizar.html',
  styleUrl: './refactorizar.css',
})
export class Refactorizar {

  usuarioActual: Usuario = {
    nombre: 'Juan Perez',
    rol: 'admin',
    ultimoAcceso: new Date()
  };

  productos: Producto[] = [
    { nombre: 'Laptop', precio: 1000, tipo: 'electronico' },
    { nombre: 'Manzana', precio: 2, tipo: 'alimento' },
    { nombre: 'Camiseta', precio: 20, tipo: 'ropa' }
  ];

  tareas: string[] = ['Revisar correos', 'Pagar servidor'];
  nuevaTarea: string = '';

  constructor(private  validador: Validador) {}

  ngOnInit(): void {

    validarUsuario(this.usuarioActual);
    
    this.procesarImpuestosIniciales();
  }

  calcularPrecioFinal(producto: Producto): number {
    let impuesto = 0;
    validatorProducto(producto,impuesto);
    generarDescuento(producto,impuesto);
    return producto.precio + impuesto;
  }

  // --- VIOLACIÓN SRP: Lógica de Datos (Debería ser un servicio) ---
  procesarImpuestosIniciales() {
    this.productos.forEach(p => {
      // Modifica el estado interno de forma impura
      p.impuesto = this.calcularPrecioFinal(p) - p.precio;
    });
  }

  // --- VIOLACIÓN SRP: Lógica de "Infraestructura" o Reportes ---
  generarReportePDF() {
    console.log('--- INICIANDO GENERACIÓN DE REPORTE ---');
    console.log(`Usuario: ${this.usuarioActual.nombre}`);
    console.log('Productos en inventario:');
    this.productos.forEach(p => {
      console.log(`- ${p.nombre}: $${this.calcularPrecioFinal(p)}`);
    });
    console.log('--- FIN REPORTE ---');
    alert('Reporte generado en consola (fingiendo que es un PDF)');
  }

  // --- OTRA RESPONSABILIDAD: Gestión de Tareas ---
  agregarTarea() {
    // Validación mezclada
    if (this.nuevaTarea.trim() === '') {
      alert('La tarea no puede estar vacía');
      return;
    }
    
    // Acceso directo a datos
    this.tareas.push(this.nuevaTarea);
    this.nuevaTarea = '';
    
    // Efecto secundario inesperado: Loguear cada acción
    console.log('Auditoría: Se agregó una tarea a las ' + new Date().toTimeString());
  }

}

interface Usuario {
  nombre: string;
  rol: string;
  ultimoAcceso: Date;
}

interface Producto {
  nombre: string;
  precio: number;
  tipo: string;
  impuesto?: number;
}

function validatorProducto(producto: Producto, impuesto: number){
  if (producto.tipo === 'electronico') {
      impuesto = producto.precio * 0.19; // 19% IVA
    } else if (producto.tipo === 'alimento') {
      impuesto = 0; // Exento
    } else if (producto.tipo === 'ropa') {
      impuesto = producto.precio * 0.05;
    }
}


function generarDescuento(producto: Producto, impuesto: number): number {
  if (producto.precio > 500) {
    return (producto.precio + impuesto) - 10; 
  }
  return producto.precio + impuesto;
}

function validarUsuario(usuarioActual: Usuario) {
  if (usuarioActual.rol !== 'admin') {
      console.warn('Usuario no autorizado para ver precios completos');
    }
}

