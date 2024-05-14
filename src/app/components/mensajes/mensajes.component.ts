import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from 'src/app/domain/message';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {
  message: Message = new Message()
  messages: any

  constructor(private mensajesService:MensajesService){ }

  ngOnInit(){
    this.mensajesService.getMensaje().then(data => {
      this.messages = data.docs.map((doc:any) =>{
        console.log(doc.id)
        console.log(doc.data())
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      console.log('msgs', this.messages)
    })
  }

  guardar(){
    this.mensajesService.addMensaje(this.message)
  }
}
