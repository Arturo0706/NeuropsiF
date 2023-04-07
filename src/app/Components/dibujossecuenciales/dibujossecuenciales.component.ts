import { Component, OnInit } from '@angular/core';
import { veintisiete } from './veintisiete';


@Component({
  selector: 'app-dibujossecuenciales',
  templateUrl: './dibujossecuenciales.component.html',
  styleUrls: ['./dibujossecuenciales.component.css']
})
export class DibujossecuencialesComponent implements OnInit {

  veintisieteModel = new veintisiete(0,0,0,0,0,0);
  
  constructor() {}

  ngOnInit() {}

  formularioEnviado(){
    
    console.log("El formulario fue enviado: ", this.veintisieteModel)
  }
}
