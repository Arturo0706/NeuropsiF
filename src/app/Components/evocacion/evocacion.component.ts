import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-evocacion',
  templateUrl: './evocacion.component.html',
  styleUrls: ['./evocacion.component.css']
})
export class EvocacionComponent {

  constructor(private fb: FormBuilder){

  }

  formVisoEspacial = this.fb.group({
    "pregunta" : ['12'],
    "hora" : ['', Validators.required],
    "evocacion" : ['', Validators.required],
    "total" :[ '',[ Validators.required,Validators.pattern(/^[0-9.0-9]+$/) ] ],
  });

  formVisoEspacial2 = this.fb.group({
    "pregunta" : ['12'],
    "hora2" : ['', Validators.required],
    "evocacion2" : ['', Validators.required],
    "total2" :[ '',[ Validators.required,Validators.pattern(/^[0-9]+$/) ] ],
  });

  // form5 = new FormGroup({
  //   "hora" : new FormControl('', Validators.required),
  //   "total" : new FormControl('',[ Validators.required,Validators.pattern(/^[0-9]+$/) ] ),

  // });

  get hora(){
    return this.formVisoEspacial.get('hora') as FormControl;
  }

  get evocacion(){
    return this.formVisoEspacial.get('evocacion') as FormControl;
  }

  get total(){
    return this.formVisoEspacial.get('total') as FormControl;
  }

  
  get hora2(){
    return this.formVisoEspacial2.get('hora2') as FormControl;
  }

  get total2(){
    return this.formVisoEspacial2.get('total2') as FormControl;
  }

  get evocacion2(){
    return this.formVisoEspacial2.get('evocacion2') as FormControl;
  }

  DB(){
    console.log(this.formVisoEspacial.value);
  }
  DB2(){
    console.log(this.formVisoEspacial2.value);
  }


}
