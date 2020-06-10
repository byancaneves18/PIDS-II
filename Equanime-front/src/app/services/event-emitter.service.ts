import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {


  invokeFirstComponentFunction = new EventEmitter();    
  subsVar: Subscription;    
    
  constructor() { }    
    
  mudarPeriodo(id_periodo : number) {    
    this.invokeFirstComponentFunction.emit(id_periodo);    
  }    


}
