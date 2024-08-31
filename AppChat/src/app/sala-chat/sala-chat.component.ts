import { Component } from '@angular/core';
import { Mensaje } from '../mensaje';
import { ChatComponent } from "../chat/chat.component";

@Component({
  selector: 'app-sala-chat',
  standalone: true,
  imports: [ChatComponent],
  templateUrl: './sala-chat.component.html',
  styleUrl: './sala-chat.component.css'
})
export class SalaChatComponent {
  mensajeria:Mensaje[]=[]

  guardarMensaje(event:Mensaje){
    this.mensajeria.push(event);
  }

}
