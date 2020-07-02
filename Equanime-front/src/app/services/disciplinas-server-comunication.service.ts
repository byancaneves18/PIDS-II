import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Periodo} from '../disciplina/listar/listarDisciplinas.component';
import { Disciplina } from 'src/app/modelo/disciplina.modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasServerComunicationService {

  url : string = 'http://localhost:8080/disciplinas';

  constructor(private http: HttpClient) { }
 

  public getDisciplinasByPeriodo(id_periodo):Observable<Disciplina[]>{

    return this.http.post<Disciplina[]>(this.url+"/getByPeriodo",id_periodo);

  }

  public getPeriodosLista(){

    return this.http.get<Periodo[]>(this.url+"/periodos");

  }

  public getDisciplinasLista(){

    return this.http.get<Disciplina[]>(this.url+"/disciplinas");

  }

  public getDisciplinabyid(id : string){

    return this.http.post<Disciplina>(this.url+"/disciplinaById",id);

  }

  public getPeriodobyid(id : number){

    return this.http.post<Periodo>(this.url+"/periodoById",id);

  }
  
  public novaDisciplina (body : Disciplina): Observable<Post> {

    return this.http.post<Post>(this.url+"/novaDisciplina",body);


  

  }

  public atualizarDisciplina(body : Disciplina){

    return this.http.post(this.url+"/atualizarDisciplina",body);

  }

  public excluirDisciplinaById(id : number){

    return this.http.post(this.url+"/excluirDisciplinaById",id);

  }


}

class Post {
  constructor(
      public id: string,
      public title: string,
      public body: string
  ) { }
}