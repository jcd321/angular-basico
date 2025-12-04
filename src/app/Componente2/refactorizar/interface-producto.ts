  
interface Producto {
  nombre: string;
  precio: number;
  tipo: 'electronico' | 'ropa' | 'alimento';
  impuesto?: number;
}