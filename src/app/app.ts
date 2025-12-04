import { Component, signal } from '@angular/core';
import { Refactorizar } from "./Componente2/refactorizar/refactorizar";
import { Header } from "./Componente2/header/header";
import { Nabvar } from "./Componente2/nabvar/nabvar";
import { Footer } from "./Componente2/footer/footer";
import { Home } from "./Componente2/home/home";



@Component({
  selector: 'app-root-new',
  imports: [Header, Nabvar, Footer, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-basico');
}
