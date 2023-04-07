import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-orientacion',
  templateUrl: './orientacion.component.html',
  styleUrls: ['./orientacion.component.css']
})
export class OrientacionComponent {
  
  pregunta1 = 1;
  pregunta2 = 2;

  formularioArray: any[] = [];
  dia: any;
  valorDia: any;
  mes: any;
  valorMes: any;
  ano: any;
  valorAno: any;
  hora: any;
  valorHora: any;
  calle:any;
  valorCalle:any;
  colonia:any;
  valorColonia:any;
  anos:any;
  valorAnos:any;
  question1:any;


  constructor(private fb: FormBuilder) { }

  submitForm() {
    const datosFormulario = {
      dia: this.dia,
      valorDia: this.valorDia,
      mes: this.mes,
      valorMes: this.valorMes,
      ano: this.ano,
      valorAno: this.valorAno,
      hora: this.hora,
      valorHora: this.valorHora,
      calle: this.calle,
      valorCalle: this.valorCalle,
      colonia: this.colonia,
      valorColonia: this.valorColonia,
      anos: this.anos,
      valorAnos: this.valorAnos,
      question1: this.pregunta1,
      question2: this.pregunta2,
    };
    this.formularioArray.push(datosFormulario);
    console.log(this.formularioArray);
  }


}
