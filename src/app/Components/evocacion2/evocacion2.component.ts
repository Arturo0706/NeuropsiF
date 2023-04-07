import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-evocacion2',
  templateUrl: './evocacion2.component.html',
  styleUrls: ['./evocacion2.component.css']
})
export class Evocacion2Component {

  constructor( private fb: FormBuilder){

  }

  formEvocacion = this.fb.group({
    "pregunta" : ['13'],

    "parrafo1" : ['',Validators.required],

    "historia" : ['',[Validators.required,Validators.pattern(/^[0-9.0-9]+$/) ] ],

    "tema" : ['', [ Validators.required,Validators.pattern( /^[0-9.0-9]+$/) ]],

    "parrafo2" : ['',Validators.required],
    
    "historia2" : ['',[Validators.required,Validators.pattern(/^[0-9.0-9]+$/) ] ],

    "tema2" : ['', [ Validators.required,Validators.pattern( /^[0-9.0-9]+$/) ]],
    
    "phistoria" : ['',[Validators.required,Validators.pattern(/^[0-9.0-9]+$/) ] ],

    "ptema" : ['', [ Validators.required,Validators.pattern( /^[0-9.0-9]+$/) ]],

    "pevocacion" : ['', [ Validators.required,Validators.pattern( /^[0-9.0-9]+$/) ]],
  });

  get parrafo1(){
    return this.formEvocacion.get('parrafo1') as FormControl;
  }

  get historia(){
    return this.formEvocacion.get('historia') as FormControl;
  }

  get tema(){
    return this.formEvocacion.get('tema') as FormControl;
  }

  get parrafo2(){
    return this.formEvocacion.get('parrafo2') as FormControl;
  }

  get historia2(){
    return this.formEvocacion.get('historia2') as FormControl;
  }

  get tema2(){
    return this.formEvocacion.get('tema2') as FormControl;
  }

  get ptema(){
    return this.formEvocacion.get('ptema') as FormControl;
  }

  get phistoria(){
    return this.formEvocacion.get('phistoria') as FormControl;
  }

  get pevocacion(){
    return this.formEvocacion.get('pevocacion') as FormControl;
  }

  DB13(){
    return console.log(this.formEvocacion.value);
  }


}
