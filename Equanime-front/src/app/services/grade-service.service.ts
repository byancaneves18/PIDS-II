
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Grade } from '../modelo/grade.modelo';
import { Dia } from '../modelo/dia_semana.modelo';
import { Alerta } from '../modelo/alerta.modelo';
import { PedidoProf } from '../modelo/pedidoProfessor.modelo';
import { PedidoAluno } from '../modelo/pedidosAluno.modelo';

@Injectable({
  providedIn: 'root'
})

export class GradeServiceService {

  url = 'http://localhost:8080/grade';
  urlRelatorios = 'http://localhost:8080/relatorios';

  constructor(private httpClient: HttpClient,/*private http: Http*/) { }



    downloadRelatorioPdf():Observable<any>{

      return this.httpClient.get(this.urlRelatorios+"/arquivo", {responseType: 'blob'});

    }

    downloadCsv(): Observable<any>{
      return this.httpClient.get(this.url+"/getHorarioCSV", {responseType: 'blob'});

    }

    downloadPdf(): Observable<any>{
      return this.httpClient.get(this.url+"/getHorarioPDF", {responseType: 'blob'});

    }

    updatePedido(body:PedidoAluno){ //da ordem para o back atualizar o pedido especificado no body

      return this.httpClient.post(this.url+"/updatePedido",body);

    }


    getPedidosAluno():Observable<PedidoAluno[]>{// busca uma lista de pedidos de aluno no back
      
      return this.httpClient.get<PedidoAluno[]>(this.url+"/getPedidos");


    }

    updateObservacao(body:PedidoProf){ //da ordem para o back atualizar a observacao especificada no body

      return this.httpClient.post(this.url+"/updateObservacao",body);

    }

    getObservacoes(): Observable<PedidoProf[]>{

      return this.httpClient.get<PedidoProf[]>(this.url+"/getObservacoes");
    }

    getAlertas():Observable<Alerta[]>{

      return this.httpClient.get<Alerta[]>(this.url+"/getAlertas");
    }

    getDiasSemana():Observable<Dia[]>{

      return this.httpClient.get<Dia[]>(this.url+"/getDias");

    }

    setGrade(body:Grade){ //da ordem para o back criar uma nova grade especificada no body

      return this.httpClient.post(this.url+"/setGrade",body);

    }


    editGrade(body:Grade){ //da ordem para o back editar uma grade especificada no body

      return this.httpClient.post(this.url+"/editGrade",body);

    }

    deleteGrade(body:Grade){ //da ordem para o back deletar uma grade especificada no body

      return this.httpClient.post(this.url+"/deleteGrade",body);

    }


    getGradesByPeriodo(id_periodo:number):Observable<Grade[]>{ //busca no back uma lista de elementos grade pertencentes ao periodo id = id_periodo

        return this.httpClient.post<Grade[]>(this.url+"/gradeSlotsByPeriodo",id_periodo);

    }
}

