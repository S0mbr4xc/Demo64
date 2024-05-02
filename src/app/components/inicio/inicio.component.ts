import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HistorialService } from 'src/app/services/historial.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  ans: string = ''

  historial: string[] = []

  constructor( private historialService: HistorialService){

  }

  appendToDisplay(value: string) {
    this.ans += value;
    console.log(value)
  }

  calculateAndAdd() {
    try {
      this.ans = eval(this.ans).toString();
      this.add();
    } catch (error) {
      console.error('Error al evaluar la expresión:', error);
      this.ans = ''; // Resetea la respuesta o maneja el error de forma adecuada
    }
  }
  
  ngOnInit(){
    this.historial = this.historialService.get()
  }

  add(){
    this.historialService.add(this.ans)
    console.log("respuesta:", this.ans)
  }

  clear(){
    this.ans= ''
  }
}
