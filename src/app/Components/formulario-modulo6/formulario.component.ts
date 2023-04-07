import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  template: `
    <div class="titulo">
      <h1>CODIFICACIÓN, MEMORIA LÓGICA</h1>
      <p>"Voy a leerle dos historias. Cuando termine de leer cada una, le pediré que me diga todo lo que pueda recordar."</p>
      <p>"Más adelante le solicitaré que repita de nuevo todo lo que recuerde de cada una de las historias".</p>
      <p>Se lee en voz alta el párrafo 1 que aparece en la lámina 3 y al terminar se indica: "Ahora dígame todo lo que pueda recordar".</p>
      <p>Se debe enfatizar en que habrá de recordar todos los detalles de la lectura.</p>
    </div>
    <div class="historias">
      <div class="historia">
        <h2>Historia 1:</h2>
        <textarea placeholder="Escriba aquí..." #cajaTexto1></textarea>
        <button (click)="enviar(cajaTexto1.value, unidadHistoria1.value, unidadTema.value)">Enviar/guardar</button>
        <br><br>
        <label>Unidad Historia: </label>
        <input type="number" max="16" min="1" #unidadHistoria1>
        <br>
        <label>Unidad Tema: </label>
    <input type="number" max="5" min="1" #unidadTema>
      </div>
      <div class="historia">
        <h2>Historia 2:</h2>
        <p>Luego se lee el párrafo 2, que aparece en la lámina 4 y, al terminar, se indica: "Ahora dígame todo lo que pueda recordar de la segunda historia".</p>
        <textarea placeholder="Escriba aquí..." #cajaTexto2></textarea>
        <button (click)="enviar2(cajaTexto2.value, unidadHistoria2.value, unidadTema2.value)">Enviar/guardar</button>
        <br><br>
        <label>Unidad Historia: </label>
        <input type="number" max="16" min="1" #unidadHistoria2>
      </div>
    </div>
    <label>Unidad Tema: </label>
    <input type="number" max="5" min="1" #unidadTema2>

  `,
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  enviar(texto: string, unidadHistoria: string, unidadTema: string) {
    console.log('Datos del párrafo 1:');
    console.log(JSON.stringify({ texto }));
    console.log('Unidad Historia: ' + unidadHistoria);
    console.log('Unidad Tema: ' + unidadTema);
  }

  enviar2(texto: string, unidadHistoria: string, unidadTema: string) {
    console.log('Datos del párrafo 2:');
    console.log(JSON.stringify({ texto }));
    console.log('Unidad Tema: ' + unidadTema);
    console.log('Unidad Historia: ' + unidadHistoria);
  }

  calcularPuntuacion(texto1: string, texto2: string, unidadHistoria1: string, unidadHistoria2: string, unidadTema: string) {
    // Sumar las unidades de las historias y del tema
    const totalUnidades = parseInt(unidadHistoria1) + parseInt(unidadHistoria2) + parseInt(unidadTema);

    // Imprimir el resultado en formato JSON
    console.log(JSON.stringify({ 
        unidadesHistorias: parseInt(unidadHistoria1) + parseInt(unidadHistoria2), 
        unidadTema: parseInt(unidadTema),
        totalUnidades: totalUnidades
    }));
}
}
