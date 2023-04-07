import { Component } from "@angular/core";

@Component({
  selector: 'app-series-sucesivas',
  templateUrl: './series-sucesivas.component.html',
  styleUrls: ['./series-sucesivas.component.css']
})
export class SeriesSucesivasComponent {
  tiempo: number = 0;
  total: number = 0;
  enviarDatos() {
    const datos = {
      tiempo: this.tiempo,
      total: this.total
    };
    console.log(JSON.stringify(datos));
  }
  
}
