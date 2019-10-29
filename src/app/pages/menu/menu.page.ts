import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = [
    {
      titulo: 'Home',
      url: '/menu/home',
      icon: 'logo-angular'
    },
    {
      titulo: 'Visitas',
      icon:'home',
      children: [
        {
          titulo: 'Agregar visita',
          url: '/menu/agregar-visita',
          icon: 'add'
        },
        {
          titulo: 'Buscar visita',
          url: '/menu/buscar-visita',
          icon: 'search'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
