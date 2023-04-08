import { Component, OnInit } from '@angular/core';
import { veinticinco } from './veinticinco';

@Component({
  selector: 'app-cambiomano',
  templateUrl: './cambiomano.component.html',
  styleUrls: ['./cambiomano.component.css']
})
export class CambiomanoComponent implements OnInit {

  veinticincoModel = new veinticinco(0);
  
  constructor() {}

  ngOnInit() {}

  formularioEnviado(){
    
    console.log("El formulario fue enviado: ", this.veinticincoModel)
  }

}
