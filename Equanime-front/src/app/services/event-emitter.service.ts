import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';
import { Dia } from '../modelo/dia_semana.modelo';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {


  mudarPeriodoEmitter = new EventEmitter();       
  subsVarMudarPeriodo: Subscription;  
  atualizarEmitter = new EventEmitter();       
  subsVaratualizar: Subscription; 
  atualizarPedidosEmitter = new EventEmitter();   
  subsVaratualizarPedidos: Subscription;    
    
  constructor() { }    
    
  mudarPeriodo(id_periodo : number) {    
    this.mudarPeriodoEmitter.emit(id_periodo);    
  } 
  
  atualizar() {    
    this.atualizarEmitter.emit();    
  } 

  atualizarPedidos(){
    this.atualizarPedidosEmitter.emit();
  }

}
