
import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memoria-verbal-por-claves',
  templateUrl: './memoria-verbal-por-claves.component.html',
  styleUrls: ['./memoria-verbal-por-claves.component.scss'],
})
export class MemoriaVerbalPorClavesComponent  {

  submitted = false;



  constructor(private fb: FormBuilder,private router: Router) {}

  numbers: number[] = [];
  sum: number = 0;
  Intrusiones: number = 0;
  Perseveraciones: number = 0;
  elementosEnviados: any[] = [];
  cantidadDatos: number;

  sumNumbers() {
    
    this.sum = 0;
    for (let number of this.numbers) {
      this.sum += number;
    }



    const elementos = {
      Total: this.sum,
      Intrusiones: this.Intrusiones,
      Perseveraciones: this.Perseveraciones,

     


    };



    this.elementosEnviados.push(elementos);
    console.log("Has enviado los siguientes elementos: ", this.elementosEnviados);
    this.cantidadDatos = this.numbers.length;
    alert('Mensaje Enviado !'+JSON.stringify(this.elementosEnviados))



  }



siguiente() {
  this.router.navigate(['/paso3']);
}
anterior() {
  this.router.navigate(['/paso1']);
}

}

