import { Component, OnInit} from '@angular/core';

@Component({

    selector: 'app-input',
    templateUrl: './inputs.component.html',
    styleUrls: ['./inputs.component.css'],
})
export class MiComponente implements OnInit {
  cajasIzquierda: string[] = [];
  cajasDerecha: string[] = [];
  respuestasIzquierda = Array(56).fill('');
  respuestasDerecha = Array(56).fill('');

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 28; i++) {
      if (i <= 14) {
        this.cajasIzquierda.push(`Caja ${i}`);
      } else {
        this.cajasDerecha.push(`Caja ${i}`);
      }
    }
  }

  enviarRespuestas() {
    // Aquí puedes enviar las respuestas al servidor o procesarlas como desees xd
    console.log(this.respuestasIzquierda);
    console.log(this.respuestasDerecha);
  }
}