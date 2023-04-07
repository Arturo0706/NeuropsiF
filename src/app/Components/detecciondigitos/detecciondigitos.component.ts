import { Component, OnInit } from '@angular/core';
import { diecisiete } from './diecisiete';

@Component({
  selector: 'app-detecciondigitos',
  templateUrl: './detecciondigitos.component.html',
  styleUrls: ['./detecciondigitos.component.css']
})
export class DetecciondigitosComponent implements OnInit {

  diecisieteModel = new diecisiete(0,0,0,0,0,0,0,0,0);
  
  constructor() {}

  ngOnInit() {}

  formularioEnviado(){
    
    console.log("El formulario fue enviado: ", this.diecisieteModel)
  }

  
}
