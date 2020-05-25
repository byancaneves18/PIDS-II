import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Periodo} from './listar/listarDisciplinas.component';
import {Disciplina} from './listar/listarDisciplinas.component';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerComunicationService {

  url : string = 'http://localhost:8080/disciplinas';

  constructor(private http: HttpClient) { }
 

  public teste(){

  //  const req = http.get<Heroes>('/api/heroes');
// 0 requests made - .subscribe() not called.
//req.subscribe();
// 1 request made.
//req.subscribe();
// 2 requests made.

   const req = this.http.post(this.url,'qualque coisa');
   req.subscribe();
    this.http.get(`${this.url}`);
    this.http.get(this.url);
    console.log('Mensagem enviada pro back url:'+this.url);
  
  }

  public getPeriodosLista(){

    return this.http.get<Periodo[]>(this.url+"/periodos");

  }

  public getDisciplinasLista(){

    return this.http.get<Disciplina[]>(this.url+"/lista");

  }

  public getDisciplinabyid(id : string){

    return this.http.post<Disciplina>(this.url+"/disciplinaById",id);

  }

  public getPeriodobyid(id : string){

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