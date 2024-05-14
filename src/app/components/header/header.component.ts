import { Component, Input, ViewChild } from '@angular/core';
import { SesionComponent } from '../sesion/sesion.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  
  paginas = [
    {titulo: "Inicio" , path: "components/inicio"},
    {titulo: "Suma", path: "components/suma"},
    {titulo: "Resta", path: "components/resta"},
    {titulo: "Multiplicacion", path: "components/multiplicacion"},
    {titulo: "Division", path: "components/division"},
<<<<<<< HEAD
    {titulo: "Acerca de", path: "components/acercade"},
    {titulo: "Post", path: "components/post"},
    {titulo: "Mensajes", path: "components/mensajes"}
=======
    {titulo: "Acerca de", path: "components/acercade"}
>>>>>>> parent of c02a9d3 (Hosting y servicios de apis)
  ]

  tiempoConexion: string = ''
  intervalo = 10
  @Input() usuario: string = ''
  @ViewChild('tiempoSesion') tiempoSesion!: SesionComponent;
  
  actualizar(segundos: number){
    this.tiempoConexion = 'Conectado: ' + segundos + 'segundos'
  }

  nuevoIntervalo(intervalo: number){
    console.log(intervalo)
    this.tiempoSesion.setIntervalo(intervalo)
  }
}
