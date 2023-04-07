
import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memoria-verbal-por-reconocimiento',
  templateUrl: './memoria-verbal-por-reconocimiento.component.html',
  styleUrls: ['./memoria-verbal-por-reconocimiento.component.scss'],
})
export class MemoriaVerbalPorReconocimientoComponent  {



  constructor(private fb: FormBuilder,private router: Router) {}
  items = [
    { name: 'Diente', selected: false },
    { name: 'Fresa', selected: false },
    { name: 'Cama', selected: false },
    { name: 'Lima', selected: false },
    { name: 'Perro', selected: false },
    { name: 'Cara', selected: false },
    { name: 'Uña', selected: false },
    { name: 'Pera', selected: false },
    { name: 'Gato', selected: false },
    { name: 'Cabra', selected: false },
    { name: 'Hombro', selected: false },
    { name: 'Piña', selected: false },
    { name: 'Cana', selected: false },
    { name: 'Pato', selected: false },
    { name: 'Mano', selected: false },
    { name: 'Brazo', selected: false },
    { name: 'Ceja', selected: false },
    { name: 'Nariz', selected: false },
    { name: 'Uva', selected: false },
    { name: 'Rana', selected: false },
    { name: 'Limon', selected: false },
    { name: 'Burro', selected: false },
    { name: 'Mango', selected: false},

  ];

  selectedItems: any[] = [];
  numSelected: number = 0;
  numUnselected: number = 0;
  numeroJson: string;

  countSelected() {
    this.numSelected = this.items.filter(item => item.selected).length;
    this.numUnselected = this.items.filter(item => !item.selected).length;
    console.log('Selected: ', this.numSelected);
    console.log('Unselected: ', this.numUnselected);
  }

  onSubmit() {

    

     const elementos = {
      
      Total: this.numSelected,
      FalsosPositivos: this.numUnselected,
      Aciertos: this.numSelected,

    };
    this.selectedItems.push(elementos);
    console.log("Has enviado los siguientes elementos: ", this.selectedItems);
    alert('Mensaje Enviado !'+JSON.stringify(this.selectedItems))

  }


  

anterior() {
  this.router.navigate(['/paso2']);
}


}

