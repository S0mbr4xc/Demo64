import { Component } from '@angular/core';
import { MensajesService } from 'src/app/services/mensajes.service';
import { Message } from 'src/app/domain/messages';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mensajes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {
  message: Message = new Message()
  messages:any
  
  constructor(private messagesService:MensajesService){ 

  }

  ngOnInit(){
    this.messagesService.getMessages().then(data => {
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
    this.messagesService.addMessage(this.message)
  }
}
