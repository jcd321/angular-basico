import { Component, signal } from '@angular/core';

import { Home } from "./Componente2/home/home";
import { Nabvar } from "./Componente2/nabvar/nabvar";
import { Header } from "./Componente2/header/header";
import { Footer } from './Componente2/footer/footer';

@Component({
  selector: 'app-root-new',
  imports: [Home, Footer, Nabvar, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-basico');
}
