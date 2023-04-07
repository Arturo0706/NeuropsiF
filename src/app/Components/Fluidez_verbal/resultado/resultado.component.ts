import { Component } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

  enviarDatos(form: any, apartado: string): void {
    console.log(`Datos enviados al apartado  ${apartado}:`);
    console.log(form.value);
  }

}
