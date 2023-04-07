import { Component } from '@angular/core';

@Component({
  selector: 'app-retencion-digitos-regresion',
  templateUrl: './retencion-digitos-regresion.component.html',
  styleUrls: ['./retencion-digitos-regresion.component.css'],
})
export class RetencionDigitosRegresionComponent {
  total = 0;
  buttons = [
    { label: '8-3 2', value: 2 },
    { label: '3-1-9 3', value: 3 },
    { label: '6-3-8-2 4', value: 4 },
    { label: '5-8-3-7-4 5', value: 5 },
    { label: '7-5-3-8-2-6 6', value: 6 },
    { label: '1-5-8-2-9-3-9 7', value: 7 },
    { label: '9-3-7-4-1-8-2-6 8', value: 8 },
    { label: '2-7 2', value: 2 },
    { label: '4-8-3 3', value: 3 },
    { label: '2-5-1-4 4', value: 4 },
    { label: '6-2-5-9-3 5', value: 5 },
    { label: '4-8-7-3-6-9 6', value: 6 },
    { label: '4-9-2-7-3-1-5 7', value: 7 },
    { label: '5-9-2-4-8-1-3-6 8', value: 8 },
  ];

  addTotal(value: number) {
    this.total = value;
  }
  
  sendJson() {
    console.log(
      'Nuevo valor total: ',
      JSON.stringify({
        id: 2,
        pregunta: '2. RETENCIÓN DE DÍGITOS EN PROGRESIÓN',
        operador: 'psicologo 1',
        total: this.total,
      
      })
    );
  }
}
