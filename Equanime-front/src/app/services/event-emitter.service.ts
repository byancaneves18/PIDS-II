import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';
import { Dia } from '../modelo/dia_semana.modelo';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {


  mudarPeriodoEmitter = new EventEmitter();       
  subsVarMudarPeriodo: Subscription;    
    
  constructor() { }    
    
  mudarPeriodo(id_periodo : number) {    
    this.mudarPeriodoEmitter.emit(id_periodo);    
  } 
  



}
