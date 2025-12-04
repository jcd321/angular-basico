import { Component } from '@angular/core';
import { NgClass } from "@angular/common";


@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  imports: [NgClass],
})
export class Home {
  titulo: string = 'Mi Primera App Angular';

  tema ={
    "dificultad": 'baja',

  }

  
}
