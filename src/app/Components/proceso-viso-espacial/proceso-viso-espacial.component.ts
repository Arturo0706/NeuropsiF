import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proceso-viso-espacial',
  templateUrl: './proceso-viso-espacial.component.html',
  styleUrls: ['./proceso-viso-espacial.component.css']
})
export class ProcesoVisoEspacialComponent {

  constructor(private fb: FormBuilder){

  }

  formVisoEspacial = this.fb.group({
    "title" : ['Hora'],
    "hora" : ['', Validators.required],
    "title2" : ['Total'],
    "total" :[ '',[ Validators.required,Validators.pattern(/^[0-9]+$/) ] ],
  });

  formVisoEspacial2 = this.fb.group({
    "title" : ['Hora'],
    "hora2" : ['', Validators.required],
    "title2" : ['Total'],
    "total2" :[ '',[ Validators.required,Validators.pattern(/^[0-9]+$/) ] ],
  });

  // form5 = new FormGroup({
  //   "hora" : new FormControl('', Validators.required),
  //   "total" : new FormControl('',[ Validators.required,Validators.pattern(/^[0-9]+$/) ] ),

  // });

  get hora(){
    return this.formVisoEspacial.get('hora') as FormControl;
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

  DB(){
    console.log(this.formVisoEspacial.value);
  }
  DB2(){
    console.log(this.formVisoEspacial2.value);
  }


}

