import { Component } from '@angular/core';

@Component({
  selector: 'app-retencion-digitos-progresion',
  templateUrl: './retencion-digitos-progresion.component.html',
  styleUrls: ['./retencion-digitos-progresion.component.css'],
})
export class RetencionDigitosProgresionComponent {
  total = 0;
  buttons = [
    { label: '4-6-2', value: 3 },
    { label: '3-5-9-1', value: 4 },
    { label: '5-9-3-2-1', value: 5 },
    { label: '3-5-1-2-7-6', value: 6 },
    { label: '6-4-1-7-2-4-9', value: 7 },
    { label: '2-8-7-3-5-9-1-6', value: 8 },
    { label: '5-6-2-8-3-5-3-1-7', value: 9 },
    { label: '6-7-3', value: 3 },
    { label: '6-8-2-4', value: 4 },
    { label: '4-2-1-5-7', value: 5 },
    { label: '6-9-2-5-7-1', value: 6 },
    { label: '7-3-6-8-2-1-4', value: 7 },
    { label: '4-3-7-8-1-2-7-5', value: 8 },
    { label: '3-7-1-6-2-4-8-9-5', value: 9 },
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
