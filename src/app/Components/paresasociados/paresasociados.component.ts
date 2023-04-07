import { Component, OnInit } from '@angular/core';
import { veintiuno } from './veintiuno';

@Component({
  selector: 'app-paresasociados',
  templateUrl: './paresasociados.component.html',
  styleUrls: ['./paresasociados.component.css']
})
export class ParesasociadosComponent implements OnInit {

  veintiunoModel = new veintiuno(0,0,0,0,'');
  
  constructor() {}

  ngOnInit() {}

  formularioEnviado(){
    
    console.log("El formulario fue enviado: ", this.veintiunoModel)
  }

}
