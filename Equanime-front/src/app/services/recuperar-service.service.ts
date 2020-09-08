import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Usuario } from 'src/app/login/usuario';

@Injectable({
  providedIn: 'root'
})
export class RecuperarService {
  acesso: boolean=true;
  private usuarioAutenticado: boolean = false;
  public usuario: Usuario = new Usuario();
  URL_API = 'http://localhost:8080/';

  constructor(private router: Router, private http: HttpClient) { }

  public testarRecuperar (body : any): Observable<any> {

    return this.http.post(this.URL_API+"recuperar",body).pipe(
      retry(0)
    );

    
  }
  getRecuperar(resgate: boolean, usuario: Usuario){

    if(resgate){
      //this.resgaste;
      console.log("recuperou aqui");
      this.router.navigate(['/recuperar']);
      
     }else{
      resgate=true;
      console.log(resgate);
      this.usuarioAutenticado = false;
      this.router.navigate(['/recuperar']);
     
    }
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = 'menssagem';
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
