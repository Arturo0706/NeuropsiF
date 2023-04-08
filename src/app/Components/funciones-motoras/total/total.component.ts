import { Component, OnInit} from '@angular/core';

@Component({
selector: 'app-total',
templateUrl: './total.component.html'

})
    export class apptotal implements OnInit {
    total: number = 0;
  
    enviarTotal() {
      console.log('El valor del total es:', this.total);
    }
    ngOnInit(): void {
        
    }
  }