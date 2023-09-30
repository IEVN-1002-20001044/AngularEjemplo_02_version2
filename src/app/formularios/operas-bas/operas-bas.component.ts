import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {

  num1 = 0;
  num2 = 0;
  operacion: string = '';
  resultado: number | string = 0;

  opcion() {
    const numUno = Number(this.num1);
    const numDos = Number(this.num2);

    switch (this.operacion) {
      case 'suma':
        this.resultado = numUno + numDos; 
        break;
      case 'resta':
        this.resultado = numUno - numDos;
        break;
      case 'mult':
        this.resultado = numUno * numDos; 
        break;
      case 'divi':
        if (numDos !== 0) { 
          this.resultado = numUno / numDos; 
        } else {
          this.resultado = NaN;
        }
        break;
      default:
        this.resultado = 0;
        break;
    }
  }
}
