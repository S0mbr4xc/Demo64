import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})

export class SesionComponent {
  segundos: number = 0
  @Output() tiempo = new EventEmitter <number>()
  @Input() intervalo: number = 0

  ngOnInit(){ //Metodo paa calcular el tiempo de sesion
    console.log("Iniciando sesion")
    setInterval(() => {
      this.segundos ++
      console.log(this.segundos, this.intervalo)
      if(this.segundos % this.intervalo == 0){
        this.tiempo.emit(this.segundos)
      }
    }, 1000)
  }

  reset(){
    this.segundos = 0
    this.tiempo.emit(this.segundos)
  }

  setIntervalo(intervalo: number){
    this.intervalo = intervalo
  }
}
