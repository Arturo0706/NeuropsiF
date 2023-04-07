import { Component, OnInit } from '@angular/core';
import { veinte } from './veinte';

@Component({
  selector: 'app-fluideznoverbal',
  templateUrl: './fluideznoverbal.component.html',
  styleUrls: ['./fluideznoverbal.component.css']
})
export class FluideznoverbalComponent implements OnInit {

  veinteModel = new veinte(0,0,0);
  
  constructor() {}

  ngOnInit() {}

  formularioEnviado(){
    
    console.log("El formulario fue enviado: ", this.veinteModel)
  }

}
