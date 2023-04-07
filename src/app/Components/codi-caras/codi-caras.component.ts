import { Component } from "@angular/core";

@Component({
  selector: 'app-codi-caras',
  templateUrl: './codi-caras.component.html',
  styleUrls: ['./codi-caras.component.css']
})
export class CodiCarasComponent {
    total = 0;
    buttons = [
      { label: 'Nombre y Apellido (2)', value: 4, selected: false },
      { label: 'Nombre o Apellido (2)', value: 2, selected: false },
      { label: 'No recordo Nombre ni Apellido (0)', value: 0, selected: false }
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

