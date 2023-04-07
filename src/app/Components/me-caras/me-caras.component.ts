import { Component } from '@angular/core';

@Component({
  selector: 'app-me-caras',
  templateUrl: './me-caras.component.html',
  styleUrls: ['./me-caras.component.css']
})
export class MeCarasComponent {
  total = 0;
  buttons = [
    { label: 'Lourdes E (2)', value: 2, selected: false },
    { label: 'Lourdes C (1)', value: 1, selected: false },
    { label: 'Efraín E (2)', value: 2, selected: false },
    { label: 'Efraín C (1)', value: 1, selected: false },
    { label: 'Guzmán E (2)', value: 2, selected: false },
    { label: 'Guzmán C (1)', value: 1, selected: false },
    { label: 'Ruiz E (2)', value: 2, selected: false },
    { label: 'Ruiz C (1)', value: 1, selected: false },
    { labell: 'Aciertos ', value: 2, selected: false },
    { labell: 'Falsos positivos ', value: 1, selected: false },
  ];


  addTotal(button: { selected: boolean; value: number; }) {
    if (!button.selected) {
      this.total += button.value;
      button.selected = true;
      console.log('Nuevo valor total: ', JSON.stringify({ total: this.total }));
    }
  }

  reset() {
    this.total = 0;
    this.buttons.forEach(button => button.selected = false);
    console.log('Valores reseteados');
  }

  setZero() {
    this.total = 0;
    this.buttons.forEach(button => button.selected = false);
    console.log('Calificación Establecida en 0');
  }

}
