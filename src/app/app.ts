import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";
import { RouterOutlet } from "../../node_modules/@angular/router/types/_router_module-chunk";
import { Menu } from "./components/menu/menu";
import { CicloVida } from "./components/ciclo-vida/ciclo-vida";

@Component({
  selector: 'app-root-new',
  imports: [CicloVida, Header, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-basico');
}
