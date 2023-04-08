import { Component, OnInit } from "@angular/core";

@Component({
    selector : 'app-fede',
    templateUrl: './resultado.component.html'
})
export class flComponent implements OnInit{
    total: string = '';
    nombre: string = "";
  
    enviarDatos() {
      console.log('El valor del total de dibujos secuenciales:', this.total);
      console.log('Total funciones motoras:', this.nombre);
    }
    ngOnInit(): void {
        
    }
}