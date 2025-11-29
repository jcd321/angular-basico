# 📚 Curso Básico de Angular - Guía de Referencia

## 📖 Tabla de Contenidos
1. [¿Qué es Angular?](#qué-es-angular)
2. [Interpolación](#interpolación)
3. [Variables](#variables)
4. [Métodos y Funciones](#métodos-y-funciones)
5. [Directivas de Control de Flujo](#directivas-de-control-de-flujo)
6. [Binding de Clases](#binding-de-clases)
7. [Resumen de Conceptos](#resumen-de-conceptos)

---

## ¿Qué es Angular?

**Angular** es un framework de desarrollo web creado por Google para construir aplicaciones de una sola página (SPA - Single Page Applications).

### Características principales:
- **Framework completo**: Incluye herramientas para routing, formularios, HTTP, etc.
- **TypeScript**: Usa TypeScript (JavaScript con tipos)
- **Componentes**: Todo se construye con componentes reutilizables
- **Two-way data binding**: Los datos se actualizan automáticamente entre el modelo y la vista
- **Modular**: Puedes dividir tu aplicación en módulos y componentes

### Estructura básica de un componente:
```
componente/
  ├── componente.ts    (Lógica del componente)
  ├── componente.html  (Vista/Plantilla)
  └── componente.css   (Estilos)
```

---

## Interpolación

La **interpolación** es la forma de mostrar datos del componente en la plantilla HTML usando dobles llaves `{{ }}`.

### Sintaxis:
```html
<h1>{{ variable }}</h1>
<p>{{ titulo }}</p>
```

### Ejemplo práctico:
```typescript
// componente.ts
export class Home {
  titulo: string = 'Mi Primera App Angular';
  nombre: string = 'Juan';
}
```

```html
<!-- componente.html -->
<h1>{{ titulo }}</h1>
<p>Bienvenido {{ nombre }}</p>
```

**Resultado:** 
- `<h1>Mi Primera App Angular</h1>`
- `<p>Bienvenido Juan</p>`

### También puedes usar expresiones:
```html
<p>Total: {{ precio * cantidad }}</p>
<p>Nombre completo: {{ nombre + ' ' + apellido }}</p>
```

---

## Variables

Las **variables** almacenan datos en el componente TypeScript y se pueden usar en la plantilla HTML.

### Tipos de variables comunes:

#### 1. Variables primitivas:
```typescript
export class Home {
  // String (texto)
  titulo: string = 'Mi App';
  
  // Number (números)
  edad: number = 25;
  
  // Boolean (verdadero/falso)
  activo: boolean = true;
  modoOscuro: boolean = false;
}
```

#### 2. Arrays (arreglos):
```typescript
export class Home {
  servicios: string[] = [
    'Servicios de actualizacion',
    'Servicios de mantenimiento',
    'Servicios de soporte tecnico',
    'Servicios de consultoria'
  ];
}
```

#### 3. Uso en HTML:
```html
<h1>{{ titulo }}</h1>
<p>Edad: {{ edad }}</p>
<p>Activo: {{ activo }}</p>
```

---

## Métodos y Funciones

Los **métodos** son funciones que definimos en el componente para realizar acciones cuando el usuario interactúa (clicks, eventos, etc.).

### Sintaxis básica:
```typescript
export class Home {
  // Método simple
  saludar() {
    console.log('Hola mundo');
  }
  
  // Método que cambia una variable
  cambiarModo() {
    this.modoOscuro = !this.modoOscuro;
  }
  
  // Método con parámetros
  mostrarMensaje(mensaje: string) {
    alert(mensaje);
  }
}
```

### Llamar métodos desde HTML:
```html
<!-- Con evento click -->
<button (click)="saludar()">Saludar</button>
<button (click)="cambiarModo()">Cambiar Modo</button>
<button (click)="mostrarMensaje('Hola')">Mostrar</button>
```

### Ejemplo práctico del proyecto:
```typescript
// home.ts
export class Home {
  servicio: boolean = true;
  modoOscuro: boolean = false;
  
  mostrarServicios() {
    this.servicio = !this.servicio;  // Alterna entre true/false
  }
  
  darkClick() {
    this.modoOscuro = !this.modoOscuro;
  }
}
```

```html
<!-- home.html -->
<button (click)="mostrarServicios()">Mostrar Servicios</button>
<button (click)="darkClick()">Dark</button>
```

---

## Directivas de Control de Flujo

Angular 18+ introdujo nuevas directivas de control de flujo que reemplazan a las antiguas `*ngIf`, `*ngFor`, `*ngSwitch`.

### 1. @if - Renderizado Condicional

Muestra u oculta contenido basado en una condición.

#### Sintaxis básica:
```html
@if(condicion) {
  <p>Se muestra si la condición es verdadera</p>
} @else {
  <p>Se muestra si la condición es falsa</p>
}
```

#### Ejemplo práctico:
```typescript
// componente.ts
export class Home {
  servicio: boolean = true;
  modoOscuro: boolean = false;
}
```

```html
<!-- componente.html -->
@if(servicio) {
  <ul>
    <li>Servicio 1</li>
    <li>Servicio 2</li>
  </ul>
} @else {
  <p>No hay servicios disponibles</p>
}

@if(modoOscuro) {
  <div class="modo-oscuro">Contenido oscuro</div>
} @else {
  <div>Contenido normal</div>
}
```

#### Con @else if:
```html
@if(edad < 18) {
  <p>Menor de edad</p>
} @else if(edad < 65) {
  <p>Adulto</p>
} @else {
  <p>Adulto mayor</p>
}
```

---

### 2. @for - Iteración sobre Arrays

Repite un bloque de HTML para cada elemento de un array.

#### Sintaxis básica:
```html
@for(item of array; track identificador) {
  <p>{{ item }}</p>
}
```

#### Ejemplo práctico:
```typescript
// componente.ts
export class Home {
  servicios: string[] = [
    'Servicios de actualizacion',
    'Servicios de mantenimiento',
    'Servicios de soporte tecnico',
    'Servicios de consultoria'
  ];
}
```

```html
<!-- componente.html -->
@for(servicio of servicios; track $index) {
  <ul>
    <li>{{ servicio }}</li>
  </ul>
}
```

#### Explicación del track:
- **`track $index`**: Usa el índice (0, 1, 2, 3...) para identificar cada elemento
- **`track item.id`**: Usa una propiedad única del objeto (mejor opción si existe)
- **`track item`**: Usa el objeto completo (solo si es primitivo)

**IMPORTANTE:** El `track` es obligatorio y mejora el rendimiento.

#### Variables especiales en @for:
```html
@for(item of items; track $index) {
  <p>Elemento: {{ item }}</p>        <!-- El elemento actual -->
  <p>Índice: {{ $index }}</p>        <!-- Posición (0, 1, 2...) -->
  <p>Primero: {{ $first }}</p>       <!-- true si es el primero -->
  <p>Último: {{ $last }}</p>         <!-- true si es el último -->
  <p>Par: {{ $even }}</p>            <!-- true si índice es par -->
  <p>Impar: {{ $odd }}</p>           <!-- true si índice es impar -->
  <p>Total: {{ $count }}</p>          <!-- Total de elementos -->
}
```

#### Ejemplo combinando @if y @for:
```html
@if(servicios.length > 0) {
  @for(servicio of servicios; track $index) {
    <li>{{ servicio }}</li>
  }
} @else {
  <p>No hay servicios disponibles</p>
}
```

---

### 3. @switch - Múltiples Condiciones

Similar a un switch en JavaScript, evalúa múltiples casos.

#### Sintaxis:
```html
@switch(variable) {
  @case(valor1) {
    <p>Casos para valor1</p>
  }
  @case(valor2) {
    <p>Casos para valor2</p>
  }
  @default {
    <p>Valor por defecto</p>
  }
}
```

#### Ejemplo práctico:
```typescript
// componente.ts
export class Home {
  dia: string = 'lunes';
}
```

```html
<!-- componente.html -->
@switch(dia) {
  @case('lunes') {
    <p>Inicio de semana</p>
  }
  @case('viernes') {
    <p>Fin de semana laboral</p>
  }
  @case('sabado') {
    <p>Fin de semana</p>
  }
  @default {
    <p>Día normal</p>
  }
}
```

---

## Binding de Clases

### [class.nombre-clase] - Binding Condicional de Clase

Agrega o quita una clase CSS basado en una condición.

#### Sintaxis:
```html
<div [class.nombre-clase]="condicion">
```

#### Ejemplo práctico:
```typescript
// componente.ts
export class Home {
  modoOscuro: boolean = false;
}
```

```html
<!-- componente.html -->
<div [class.modo-oscuro]="modoOscuro">
  <h1>Mi Contenido</h1>
</div>
```

```css
/* componente.css */
.modo-oscuro {
  background-color: #333;
  color: white;
}
```

**Cómo funciona:**
- Si `modoOscuro = true` → Se agrega la clase `modo-oscuro`
- Si `modoOscuro = false` → No se agrega la clase

#### Alternativa con @if (menos eficiente):
```html
@if(modoOscuro) {
  <div class="modo-oscuro">...</div>
} @else {
  <div>...</div>
}
```
**Nota:** Esta forma duplica el HTML, no es recomendada.

---

### [ngClass] - Múltiples Clases Condicionales

Permite aplicar múltiples clases basadas en condiciones.

#### Sintaxis:
```html
<div [ngClass]="{'clase1': condicion1, 'clase2': condicion2}">
```

#### Ejemplo:
```typescript
export class Home {
  activo: boolean = true;
  destacado: boolean = false;
}
```

```html
<div [ngClass]="{'activo': activo, 'destacado': destacado}">
  Contenido
</div>
```

**Resultado:**
- Si `activo = true` y `destacado = false` → `<div class="activo">`
- Si ambos son `true` → `<div class="activo destacado">`

---

### [ngStyle] - Estilos Inline Condicionales

Permite aplicar estilos CSS directamente en el HTML de forma dinámica basado en condiciones o variables.

#### Sintaxis:
```html
<div [ngStyle]="{'propiedad-css': valor}">
```

#### Ejemplo básico:
```typescript
// componente.ts
export class Home {
  colorTexto: string = 'blue';
  tamanoFuente: number = 20;
}
```

```html
<!-- componente.html -->
<div [ngStyle]="{'color': colorTexto, 'font-size': tamanoFuente + 'px'}">
  Texto con estilo dinámico
</div>
```

#### Ejemplo con condiciones:
```typescript
// componente.ts
export class Home {
  esImportante: boolean = true;
  edad: number = 25;
}
```

```html
<!-- componente.html -->
<div [ngStyle]="{
  'color': esImportante ? 'red' : 'black',
  'font-weight': esImportante ? 'bold' : 'normal',
  'background-color': edad >= 18 ? 'lightgreen' : 'lightyellow'
}">
  Contenido con estilos condicionales
</div>
```

#### Ejemplo práctico - Cambiar color según estado:
```typescript
// componente.ts
export class Home {
  estado: string = 'activo';
  
  getColorEstado() {
    if (this.estado === 'activo') return 'green';
    if (this.estado === 'inactivo') return 'red';
    return 'gray';
  }
}
```

```html
<!-- componente.html -->
<div [ngStyle]="{'color': getColorEstado()}">
  Estado: {{ estado }}
</div>
```

#### Ejemplo con objeto de estilos:
```typescript
// componente.ts
export class Home {
  estilosPersonalizados = {
    'color': 'purple',
    'font-size': '18px',
    'padding': '10px',
    'border': '2px solid blue'
  };
}
```

```html
<!-- componente.html -->
<div [ngStyle]="estilosPersonalizados">
  Contenido con estilos desde objeto
</div>
```

#### Diferencia entre [ngStyle] y [class]:
- **`[class.nombre-clase]`**: Agrega/quita clases CSS predefinidas en el archivo `.css`
- **`[ngStyle]`**: Aplica estilos inline directamente en el HTML de forma dinámica

**Cuándo usar cada uno:**
- Usa `[class]` cuando tengas estilos complejos o reutilizables definidos en CSS
- Usa `[ngStyle]` cuando necesites cambiar estilos dinámicamente basados en valores del componente

---

## Resumen de Conceptos

### ✅ Lo que hemos visto en este curso básico:

#### 1. **Fundamentos de Angular**
- ¿Qué es Angular y para qué sirve?
- Estructura de componentes (TS, HTML, CSS)
- Componentes standalone

#### 2. **Interpolación**
- Mostrar variables en HTML con `{{ variable }}`
- Expresiones simples en templates

#### 3. **Variables en TypeScript**
- Tipos básicos: `string`, `number`, `boolean`
- Arrays: `string[]`, `number[]`
- Inicialización de variables

#### 4. **Métodos y Funciones**
- Crear métodos en el componente
- Llamar métodos desde HTML con `(click)="metodo()"`
- Cambiar valores de variables desde métodos
- Operador lógico `!` (NOT) para alternar booleanos

#### 5. **Directivas de Control de Flujo**
- **@if**: Renderizado condicional
- **@for**: Iteración sobre arrays con `track`
- **@switch**: Múltiples condiciones
- Variables especiales: `$index`, `$first`, `$last`, `$even`, `$odd`, `$count`

#### 6. **Binding de Clases y Estilos**
- **`[class.nombre-clase]`**: Agregar/quitar una clase condicionalmente
- **`[ngClass]`**: Múltiples clases condicionales
- **`[ngStyle]`**: Estilos inline dinámicos

#### 7. **Eventos**
- `(click)`: Evento de click en botones
- `[disabled]`: Deshabilitar botones condicionalmente

#### 8. **Proyectos Prácticos**
- Componente con botones que se desactivan mutuamente
- Modo oscuro/claro con cambio de clases
- Mostrar/ocultar listas de servicios
- Menú de navegación
- Layout con header, main y footer

---

## 📝 Notas Importantes

### Mejores Prácticas:
1. ✅ **Siempre usa `track` en @for** (obligatorio y mejora rendimiento)
2. ✅ **Usa `[class.nombre-clase]` en lugar de @if** cuando solo cambias estilos
3. ✅ **Nombres descriptivos** para variables y métodos
4. ✅ **TypeScript**: Siempre declara el tipo de las variables
5. ✅ **Comentarios**: Documenta código complejo

### Errores Comunes a Evitar:
1. ❌ Olvidar el `track` en @for
2. ❌ Duplicar HTML con @if cuando solo necesitas cambiar clases
3. ❌ No usar `this.` dentro de métodos del componente
4. ❌ Olvidar importar componentes en el array `imports`

---

## 🚀 Próximos Pasos

Una vez dominados estos conceptos básicos, puedes continuar con:
- **Routing**: Navegación entre páginas
- **Servicios**: Lógica compartida entre componentes
- **Formularios**: Capturar datos del usuario
- **HTTP**: Comunicación con APIs
- **Directivas personalizadas**: Crear tus propias directivas
- **Pipes**: Transformar datos en templates

---

## 📚 Recursos Adicionales

- [Documentación oficial de Angular](https://angular.io/docs)
- [Angular Control Flow](https://angular.dev/guide/control-flow)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**¡Felicitaciones por completar el curso básico de Angular! 🎉**

*Este README es una guía de referencia rápida. Guárdalo y consúltalo cuando lo necesites.*
