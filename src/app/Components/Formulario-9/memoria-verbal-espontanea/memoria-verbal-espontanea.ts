
import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memoria-verbal-espontanea',
  templateUrl: 'memoria-verbal-espontanea.html',
  styleUrls: ['memoria-verbal-espontanea.scss'],
})
export class MemoriaVerbalEspontaneaComponent  {



  constructor(private fb: FormBuilder,private router: Router) {}
  items = [
    { name: 'Cara', selected: false },
    { name: 'Pera', selected: false },
    { name: 'Burro', selected: false },
    { name: 'Fresa', selected: false },
    { name: 'Pato', selected: false },
    { name: 'Ceja', selected: false },
    { name: 'Rana', selected: false },
    { name: 'Hombro', selected: false },
    { name: 'Cabra', selected: false },
    { name: 'Piña', selected: false },
    { name: 'Codo', selected: false },
    { name: 'Lima', selected: false },
    

  ];

  selectedItems: any[] = [];
  numSelected: number = 0;
  numUnselected: number = 0;
  numeroJson: string;
  Intrusiones: number = 0;
  Perseveraciones: number = 0;
  countSelected() {
    this.numSelected = this.items.filter(item => item.selected).length;
    this.numUnselected = this.items.filter(item => !item.selected).length;
    console.log('Selected: ', this.numSelected);
    console.log('Unselected: ', this.numUnselected);
    
  }

  onSubmit() {

    

     const elementos = {
      
      Total: this.numSelected,
      Intrusiones: this.Intrusiones,
      Perseveraciones: this.Perseveraciones,

    };
    this.selectedItems.push(elementos);
    console.log("Has enviado los siguientes elementos: ", this.selectedItems);
    alert('Mensaje Enviado !'+JSON.stringify(this.selectedItems))
  }


  

anterior() {
  this.router.navigate(['/paso2']);
}
siguiente() {
  this.router.navigate(['/paso2']);
}

}

