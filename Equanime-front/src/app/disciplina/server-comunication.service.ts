import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Periodo} from './listar/listarDisciplinas.component';
import {Disciplina} from './listar/listarDisciplinas.component';

@Injectable({
  providedIn: 'root'
})
export class ServerComunicationService {

  url : string = 'http://localhost:8080/api';

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

    return this.http.get<Disciplina[]>(this.url+"/disciplinas");

  }

  public getPeriodobyid(id : string){

    return this.http.post<Periodo>(this.url+"/periodoById",id);

  }
  


}
