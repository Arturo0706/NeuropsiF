import { Component } from '@angular/core';

@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.css']
})
export class FuncionesComponent {
    total = 0;
    buttons = [
      { label: 'No lo hizo. (0)', value: 0, selected: false },
      { label: 'Lo hizo con errores (1)', value: 1, selected: false },
      { label: 'Lo hizo correctamente (2)', value: 2, selected: false }

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
      console.log('Calificación establecida en 0');
    }
  

}
