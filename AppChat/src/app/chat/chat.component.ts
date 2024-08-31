import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Mensaje } from '../mensaje';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  @Input() user:string='';
  @Output() enviarMensaje = new EventEmitter<Mensaje>();
  msjarea:string='';
  
  obtenerMensaje(){
    let msj:Mensaje={
      usuario: this.user,
      contenido: this.msjarea
    }
    this.enviarMensaje.emit(msj);
    this.msjarea = '';
    
  }
}
