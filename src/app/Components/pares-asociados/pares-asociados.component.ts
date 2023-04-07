import { Component } from '@angular/core';

@Component({
  selector: 'app-pares-asociados',
  templateUrl: './pares-asociados.component.html',
  styleUrls: ['./pares-asociados.component.css'],
})
export class ParesAsociadosComponent {
  intrusiones = 0;
  Perseveraciones = 0;
  total = 0; // Declaración de la propiedad total
  tableData: any[] = [];
  totalCheckboxes: number = 0;

  rows: any[] = [];
  rows2: any[] = [];
  rows3: any[] = [];

  column1: string[] = [
    'Cielo (hielo)',
    'Metal (fierro)',
    'Foco (coco)',
    'Coche (payaso)',
    'Fruta (uva)',
    'Accidente (oscuridad)',
    'Camión (melón)',
    'Elefante (vidrio)',
    'Pantalón (blusa)',
    'Huevo (nuevo)',
    'Plato (lobo)',
    'Flor (árbol)',
  ];
  column2: string[] = [
    'Accidente (oscuridad)',
    'Camión (melón)',
    'Pantalón (blusa)',
    'Plato (lobo)',
    'Foco (coco)',
    'Flor (árbol)',
    'Cielo (hielo)',
    'Coche (payaso)',
    'Huevo (nuevo)',
    'Fruta (uva)',
    'Eletante (vidrio)',
    'Metal (fierro)',
  ];
  column3: string[] = [
    'Cielo (hielo)',
    'Metal (fierro)',
    'Foco (coco)',
    'Coche (payaso)',
    'Fruta (uva)',
    'Accidente (oscuridad)',
    'Camión (melón)',
    'Elefante (vidrio)',
    'Pantalón (blusa)',
    'Huevo (nuevo)',
    'Plato (lobo)',
    'Flor (árbol)',
  ];

  constructor() {
    for (let i = 0; i < 12; i++) {
      this.rows.push({
        col1: this.column1[i],
        col2: '',
        col3: false,
        col4: false,
        col5: false,
      });
      this.rows2.push({
        col1: this.column2[i],
        col2: '',
        col3: false,
        col4: false,
        col5: false,
      });
      this.rows3.push({
        col1: this.column3[i],
        col2: '',
        col3: false,
        col4: false,
        col5: false,
      });
    }
  }

  sumCheckbox() {
    let sum = 0;
    let sum3 = 0;
    let sum4 = 0;
    let sum5 = 0;
    this.rows.forEach((row) => {
      if (row.col3) sum3++;
      if (row.col4) sum4++;
      if (row.col5) sum5++;
    });
    return sum;
  }

  getTableData() {
    this.tableData = [];
    const tables = [this.rows, this.rows2, this.rows3];
    for (let tableIndex = 0; tableIndex < tables.length; tableIndex++) {
      const table = tables[tableIndex];
      table.forEach((row, index) => {
        const isCol2Valid = row.col2.trim() !== '';
        const isCol3Present = row.col3 || row.col4 || row.col5;
        const estado = isCol2Valid && isCol3Present ? 'Correcto' : 'Incorrecto'; // Verifica si la columna 2 tiene algún valor y el checkbox de la columna 3 está presente

        const rowData = {
          rowNumber: tableIndex * 12 + index + 1,
          informacion: isCol2Valid ? row.col2 : '',
          estado: estado,
        };

        this.tableData.push(rowData);
      });
    }
  }

  calculateColumnTotal(rows: any[], column: string): number {
    let selectedRows = rows.filter((row) => row[column]);
    let total = 0;
    selectedRows.forEach((row) => {
      total += Number(row[column]);
    });
    return total;
  }

  hasCheckbox(row: any, tableNum: number = 1, subTableNum: number = 1) {
    const tables = [
      [4, 6, 8, 11],
      [1, 3, 7, 10],
      [2, 5, 9, 12],
      [1, 4, 8, 11],
      [2, 5, 7, 9],
      [3, 6, 10, 12],
      [1, 5, 8, 11],
      [2, 4, 7, 9],
      [3, 6, 10, 12],
    ];
    const table = tables[(tableNum - 1) * 3 + subTableNum - 1];
    const rowNumber = this.getTableRowNumber(row, tableNum, subTableNum);
    return table.includes(rowNumber);
  }

  getTableRowNumber(row: any, tableNum: number, subTableNum: number) {
    const tables = [this.rows, this.rows2, this.rows3];
    const table = tables[tableNum - 1];
    const rowNumber = table.indexOf(row) + 1;
    if (rowNumber === 0) {
      const subTable = tables[tableNum];
      const subTableIndex = subTable.indexOf(row);
      const rowsBeforeSubTable = tableNum * 4 - 4;
      return rowsBeforeSubTable + subTableIndex + 1;
    }
    return rowNumber;
  }

  calculateTotal(column: string): number {
    let total = 0;
    [this.rows, this.rows2, this.rows3].forEach((rows) => {
      rows.forEach((row) => {
        if (row[column]) {
          total += Number(row[column]);
        }
      });
    });
    return total;
  }

  answerCheckbox() {
    let jsonData: {
      id: Number;
      totalAsocSemantica: number;
      totalAsocFonologica: number;
      totalNoAsociacion: number;
      intrusiones: Number;
      Perseveraciones: Number;
      tableData: { column1: string; column2: string; column3: string }[];
      pregunta: string;
      operador: string;
      errores: number;
      total: number;
    } = {
      id: 11,
      pregunta: '11. CODIFICACIÓN. PARES ASOCIADOS',
      operador: 'psicologo 1',
      totalAsocSemantica: 0,
      totalAsocFonologica: 0,
      totalNoAsociacion: 0,
      errores: 0,
      intrusiones: 0,
      Perseveraciones: 0,
      total: 0,
      tableData: [],
    };

    // Agregar las variables de intrusiones y Perseveraciones al objeto jsonData
    jsonData.intrusiones = this.intrusiones;
    jsonData.Perseveraciones = this.Perseveraciones;

    // Obtener los datos de la tabla y agregarlos al objeto JSON
    this.getTableData();
    jsonData.tableData = this.tableData;

    // Calcular el total de cada columna y agregarlo al objeto JSON
    jsonData.totalNoAsociacion = this.calculateColumnTotal(
      this.rows.concat(this.rows2, this.rows3),
      'col3'
    );
    jsonData.totalAsocFonologica = this.calculateColumnTotal(
      this.rows.concat(this.rows2, this.rows3),
      'col4'
    );
    jsonData.totalAsocSemantica = this.calculateColumnTotal(
      this.rows.concat(this.rows2, this.rows3),
      'col5'
    );

    jsonData.errores =
      36 -
      (this.calculateColumnTotal(
        this.rows.concat(this.rows2, this.rows3),
        'col3'
      ) +
        this.calculateColumnTotal(
          this.rows.concat(this.rows2, this.rows3),
          'col4'
        ) +
        this.calculateColumnTotal(
          this.rows.concat(this.rows2, this.rows3),
          'col5'
        ));

    jsonData.total =
      ((this.calculateColumnTotal(
        this.rows.concat(this.rows2, this.rows3),
        'col3'
      ) +
        this.calculateColumnTotal(
          this.rows.concat(this.rows2, this.rows3),
          'col4'
        ) +
        this.calculateColumnTotal(
          this.rows.concat(this.rows2, this.rows3),
          'col5'
        )) /
        36) *
      12;

    // Convertir el objeto JSON a una cadena y mostrarlo en la consola
    const jsonString = JSON.stringify(jsonData);
    console.log(jsonString);
  }
}
