import { Component, Input, OnInit } from '@angular/core';
import { Diez } from './Diez';

@Component({
  selector: 'app-deteccionvisual',
  templateUrl: './deteccionvisual.component.html',
  styleUrls: ['./deteccionvisual.component.css']
})
export class DeteccionvisualComponent implements OnInit {
  diezModel = new Diez("", "", "");

  constructor() {}

  ngOnInit() {}

  formularioEnviado(){
    console.log("El formulario fue enviado: ", this.diezModel)
  }
  

  
}
