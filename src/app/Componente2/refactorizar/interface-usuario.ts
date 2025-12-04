
interface Usuario {
  nombre: string;
  rol: 'admin' | 'user';
  ultimoAcceso: Date;
}