import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PedidoAluno } from '../modelo/pedidosAluno.modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosAlunoServerService {

  url : string = 'http://localhost:8080/aluno';

  constructor(private http: HttpClient) { }


  novoPedido(pedido: PedidoAluno){

    return this.http.post(this.url+"/novo",pedido);

  }
  

  listarPedidos(): Observable<PedidoAluno[]>{

    return this.http.get<PedidoAluno[]>(this.url+"/getLista");
  }

  excluirPedido(pedido: PedidoAluno){
    return this.http.post(this.url+"/deletar",pedido);
  }

}
