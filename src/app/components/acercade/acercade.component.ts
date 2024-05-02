import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactosService } from 'src/app/services/contactos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acercade',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent {
  msg: string = ''

  messages: string[] = []

  constructor(private contactosService: ContactosService){

  }

  ngOnInit(){
    this.messages = this.contactosService.get()
  }
  
  agregar(){
    this.contactosService.add(this.msg)
  }

  limpiar(){
    this.contactosService.clear()
    this.ngOnInit()
  }
}
