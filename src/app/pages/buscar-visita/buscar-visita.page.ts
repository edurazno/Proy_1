import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-visita',
  templateUrl: './buscar-visita.page.html',
  styleUrls: ['./buscar-visita.page.scss'],
})
export class BuscarVisitaPage implements OnInit {
  itemSelected=false;
  nombreSelected="";
  entrada="";
  nombres=["Amsterdam",
    "Bogota",
    "Buenos Aires",
    "Cairo",
    "Dhaka",
    "Edinburgh",
    "Geneva",
    "Genoa",
    "Glasglow",
    "Hanoi",
    "Hong Kong",
    "Islamabad"];
    aux=["Amsterdam",
    "Bogota",
    "Buenos Aires",
    "Cairo",
    "Dhaka",
    "Edinburgh",
    "Geneva",
    "Genoa",
    "Glasglow",
    "Hanoi",
    "Hong Kong",
    "Islamabad"];
  constructor() { }

  ngOnInit() {
  }
  cambio(val:any){
    this.entrada=val;
    if(val!=""){
      this.aux=this.nombres.filter(nombre=>{
        return nombre.includes(val);
      })
    }else{
      this.aux=this.nombres;
    }
    
    
  }

}
